"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const _404_1 = __importDefault(require("./404"));
exports.default = async (ctx, next) => {
    try {
        await next();
        _404_1.default(ctx);
    }
    catch (e) {
        if (e.status === 401) {
            return auth_1.default(ctx);
        }
        ctx.status = 500;
        ctx.body = `server error.`;
    }
};
//# sourceMappingURL=index.js.map