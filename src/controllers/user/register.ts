import {
    Context
} from 'koa';

import {
    model
} from 'mongoose';

import md5 from 'md5';

import validator from 'validator';

import {
    Statics,
    CreateUser
} from './../../models/user/statics';

import errorCode from './../../common/code';

const User = model(`User`) as Statics;

/*
* 用户注册
* params:
* phone:string
* userName:string
* password:string
* */
export default async (ctx: Context) => {
    const {
        body
    } = ctx.request;

    const {
        phone = ``,
        userName = ``,
        password = ``
    } = body as CreateUser;

    const range = {
        min: 6,
        max: 20
    };

    /*用户名*/
    if (validator.isEmpty(userName)) {
        return ctx.body = (
            errorCode(10001)
        );
    }

    if (!validator.isLength(userName, range)) {
        return ctx.body = (
            errorCode(10003)
        );
    }

    /*手机号*/
    if (validator.isEmpty(phone)) {
        return ctx.body = (
            errorCode(10005)
        );
    }

    if (!validator.isMobilePhone(phone)) {
        return ctx.body = (
            errorCode(10006)
        );
    }

    /*密码*/
    if (validator.isEmpty(password)) {
        return ctx.body = (
            errorCode(10002)
        );
    }

    if (!validator.isLength(password, range)) {
        return ctx.body = (
            errorCode(10004)
        );
    }

    /*查询用户是否已存在*/
    const user = await User.
    getUserByUserName(userName);

    if (!!user) {
        return ctx.body = (
            errorCode(10007)
        );
    }

    const para: any = {
        phone: phone,
        userName: userName,
        password: md5(password)
    };

    /*创建用户*/
    const data = await
        User.createUser(para);

    ctx.body = {
        code: 200,
        data: data
    };
}