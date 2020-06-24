import {
    Context
} from 'koa';

export default (ctx: Context) => {
    if (!ctx.body) {
        ctx.redirect(
            `/error/404`
        );
    }
}