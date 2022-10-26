"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const validator_1 = __importDefault(require("validator"));
const jwt_json_1 = require("./../../../config/jwt.json");
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("./../../models/user"));
const code_1 = __importDefault(require("./../../common/code"));
exports.default = async (ctx) => {
    const { body } = ctx.request;
    const { userName = ``, password = `` } = body;
    /*用户名*/
    if (validator_1.default.isEmpty(userName)) {
        return ctx.body = (code_1.default(10001));
    }
    /*密码*/
    if (validator_1.default.isEmpty(password)) {
        return ctx.body = (code_1.default(10002));
    }
    try {
        const params = {
            userName: userName,
            password: md5_1.default(password)
        };
        const user = await user_1.default.getUserInfo(params);
        if (!user) {
            return ctx.body = (code_1.default(10008));
        }
        const payload = {
            userId: user._id
        };
        /*生成Token 放入header头*/
        const token = jwt.sign(payload, jwt_json_1.secret, {
            expiresIn: `30 days`
        });
        ctx.set(`token`, token);
        ctx.body = {
            code: 200,
            data: user
        };
    }
    catch (e) {
        ctx.body = (code_1.default(5000, e.message));
    }
};
//# sourceMappingURL=login.js.map