"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xss_1 = __importDefault(require("xss"));
const md5_1 = __importDefault(require("md5"));
const validator_1 = __importDefault(require("validator"));
const user_1 = __importDefault(require("./../../models/user"));
const code_1 = __importDefault(require("./../../common/code"));
/*
* 用户注册
* params:
* phone:string
* userName:string
* password:string
* */
exports.default = async (ctx) => {
    const { body } = ctx.request;
    const { phone = ``, userName = ``, password = `` } = body;
    const range = {
        min: 6,
        max: 20
    };
    /*用户名*/
    if (validator_1.default.isEmpty(userName)) {
        return ctx.body = (code_1.default(10001));
    }
    if (!validator_1.default.isLength(userName, range)) {
        return ctx.body = (code_1.default(10003));
    }
    /*手机号*/
    if (validator_1.default.isEmpty(phone)) {
        return ctx.body = (code_1.default(10005));
    }
    if (!validator_1.default.isMobilePhone(phone)) {
        return ctx.body = (code_1.default(10006));
    }
    /*密码*/
    if (validator_1.default.isEmpty(password)) {
        return ctx.body = (code_1.default(10002));
    }
    if (!validator_1.default.isLength(password, range)) {
        return ctx.body = (code_1.default(10004));
    }
    try {
        /*查询用户是否已存在*/
        const user = await user_1.default.
            getUserInfo({ userName });
        if (!!user) {
            return ctx.body = (code_1.default(10007));
        }
        const params = {
            phone: xss_1.default(phone),
            userName: xss_1.default(userName),
            password: md5_1.default(password)
        };
        /*创建用户*/
        const data = await user_1.default.createUser(params);
        ctx.body = {
            code: 200,
            data: data
        };
    }
    catch (e) {
        ctx.body = (code_1.default(5000, e.message));
    }
};
//# sourceMappingURL=register.js.map