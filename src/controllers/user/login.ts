import {
    Context
} from 'koa';

import md5 from 'md5';

import validator from 'validator';

import {
    secret
} from './../../../config/jwt.json';

import * as jwt from 'jsonwebtoken';

import User from './../../models/user';

import errorCode from './../../common/code';

/*
* 登录
* */
type Params = {
    userName: string;
    password: string;
};

export default async (ctx: Context) => {
    const {
        body
    } = ctx.request;

    const {
        userName = ``,
        password = ``
    } = body as Params;

    /*用户名*/
    if (validator.isEmpty(userName)) {
        return ctx.body = (
            errorCode(10001)
        );
    }

    /*密码*/
    if (validator.isEmpty(password)) {
        return ctx.body = (
            errorCode(10002)
        );
    }

    try {
        const params: Params = {
            userName: userName,
            password: md5(password)
        };

        const user = await User.getUserInfo(params);

        if (!user) {
            return ctx.body = (
                errorCode(10008)
            );
        }

        const payload: any = {
            userId: user._id
        };

        /*生成Token 放入header头*/
        const token = jwt.sign(payload, secret, {
            expiresIn: `30 days`
        });

        ctx.set(`token`, token);

        ctx.body = {
            code: 200,
            data: user
        };
    }
    catch (e) {
        ctx.body = (
            errorCode(5000, e.message)
        );
    }
};
