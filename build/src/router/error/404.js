"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.get(`/404`, async (ctx) => {
        await ctx.render(`404`);
    });
};
//# sourceMappingURL=404.js.map