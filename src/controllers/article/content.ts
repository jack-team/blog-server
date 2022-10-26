import {
    Context
} from 'koa';

import xss from 'xss';

interface Params {
    cateId: string;
    title: string;
    content: string;
    description: string;
}

import {
    articleModel
} from './../../models/article';

import validator from 'validator';

import errorCode from './../../common/code';

/*创建文章*/
export const post = async (ctx: Context) => {
    const {
        body
    } = ctx.request;

    const {
        title = ``,
        cateId = ``,
        content = ``,
        description = ``
    } = body as Params;

    if (validator.isEmpty(cateId)) {
        return ctx.body = errorCode(20004);
    }

    if (validator.isEmpty(title)) {
        return ctx.body = errorCode(20005);
    }

    if (validator.isEmpty(content)) {
        return ctx.body = errorCode(20006);
    }

    if (validator.isEmpty(description)) {
        return ctx.body = errorCode(20007);
    }

    const {
        userId = ``
    } = ctx.userInfo;

    try {
        const para = {
            author: userId,
            title: xss(title),
            cateId: xss(cateId),
            content: xss(content),
            description: xss(description)
        };

        await articleModel.createArticle(para);

        ctx.body = {
            code: 200,
            message: `成功.`
        };
    } catch (e) {
        ctx.body = errorCode(5000, e.message);
    }
};

/*获取详情*/
export const detail = async (ctx: Context) => {
    const {
        id = ``
    } = ctx.params;

    if (validator.isEmpty(id)) {
        return ctx.body = errorCode(20008);
    }

    try {
        const article = await (
            articleModel.getArticleById(id)
        );

        if (!article) {
            return ctx.body = errorCode(20009);
        }

        ctx.body = {
            code: 200,
            data: article
        };
    } catch (e) {
        ctx.body = errorCode(5000, e.message);
    }
};
