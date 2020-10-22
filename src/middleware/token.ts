import jwt from 'jsonwebtoken';
import { Context, Next } from 'koa';

export default async (ctx: Context, next: Next) => {
    const {
        authorization = ``
    } = ctx.headers;

    const reg: RegExp = /Bearer /;

    ctx.userInfo = jwt.decode(
        authorization.replace(reg, ``)
    );

    await next();
};
