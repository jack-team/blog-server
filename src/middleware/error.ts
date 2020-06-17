import {
    Next,
    Context
} from 'koa';

export default async (
    ctx: Context, next: Next
) => {
    try {
        await next();
        if (!ctx.body) {
            ctx.redirect(
                `/error/404`
            );
        }
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = `server error.`;
    }
}