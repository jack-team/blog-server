import {
    Context
} from 'koa';

import Router from 'koa-router';

export default (router: Router) => {
    router.get(`/404` , async (ctx: Context) => {
        await ctx.render(`404`);
    });
};

