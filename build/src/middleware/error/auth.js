"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx) => {
    ctx.body = {
        code: 401,
        message: `Protected resource, use Authorization header to get access.`
    };
};
//# sourceMappingURL=auth.js.map