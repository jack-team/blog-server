import {
    Context
} from 'koa';

export const renderSiteHtml = async (ctx: Context) => {
    await ctx.render(`site`);
}