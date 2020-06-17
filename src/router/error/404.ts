import {
    Context
} from 'koa';

import base from './index';

base.get(`/404` , async (ctx: Context) => {
    await ctx.render(`404`);
});