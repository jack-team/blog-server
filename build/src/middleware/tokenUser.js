"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = async (ctx, next) => {
    const { authorization = `` } = ctx.headers;
    const reg = /Bearer /;
    ctx.userInfo = jsonwebtoken_1.default.decode(authorization.replace(reg, ``)) || {};
    await next();
};
//# sourceMappingURL=tokenUser.js.map