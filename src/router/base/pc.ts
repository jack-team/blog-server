import base from './index';

base.get(`/pc/(.*)`, async (ctx: any) => {
    await ctx.render(`pc`);
});