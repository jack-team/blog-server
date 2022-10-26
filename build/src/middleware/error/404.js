"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx) => {
    if (!ctx.body) {
        ctx.redirect(`/error/404`);
    }
};
//# sourceMappingURL=404.js.map