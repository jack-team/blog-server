import {
    Context
} from 'koa';

export default ( ctx: Context) => {
    ctx.body = {
        code: 401,
        message: `Protected resource, use Authorization header to get access.`
    };
};