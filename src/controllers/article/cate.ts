import {
    Context
} from 'koa';

import xss from 'xss';

import {
    cateModel
} from './../../models/article';

import validator from 'validator';

import errorCode from './../../common/code';

/*
* 创建文章分类
* */

interface CreateParams {
    title: string;
    description: string;
}

export const create = async (ctx: Context) => {
    const {
        body
    } = ctx.request;

    const {
        title = ``,
        description = ``
    } = body as CreateParams;

    if (validator.isEmpty(title)) {
        return ctx.body = (
            errorCode(20001)
        );
    }

    if (validator.isEmpty(description)) {
        return ctx.body = (
            errorCode(20002)
        );
    }

    try {
        const {
            userId = ``
        } = ctx.userInfo;

        const cateInfo = await (
            cateModel.getCreateByTitle(title)
        );

        if (!!cateInfo) {
            return ctx.body = (
                errorCode(20003)
            );
        }

        const params = {
            title: xss(title),
            createUser: userId,
            updateUser: userId,
            description: xss(description)
        };

        await cateModel.createCate(params);

        ctx.body = {
            code: 200,
            message: `成功.`
        };
    }
    catch (e) {
        ctx.body = (
            errorCode(5000)
        );
    }
};


/*
获取分类列表
*/
export const list = async (ctx: Context) => {
    try {
        ctx.body = {
            code: 200,
            data: {
                list: await cateModel.getCateList()
            }
        };
    }
    catch (e) {
        ctx.body = errorCode(5000);
    }
};

