import {
    Next,
    Context
} from 'koa';

import auth from './auth';
import notFound from './404';

export default async (
    ctx: Context, next: Next
) => {
    try {
        await next();
        notFound(ctx);
    }
    catch (e) {
        if (e.status === 401) {
            return auth(ctx);
        }
        ctx.status = 500;
        ctx.body = `server error.`;
    }
}