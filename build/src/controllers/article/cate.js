"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.create = void 0;
const xss_1 = __importDefault(require("xss"));
const article_1 = require("./../../models/article");
const validator_1 = __importDefault(require("validator"));
const code_1 = __importDefault(require("./../../common/code"));
exports.create = async (ctx) => {
    const { body } = ctx.request;
    const { title = ``, description = `` } = body;
    if (validator_1.default.isEmpty(title)) {
        return ctx.body = (code_1.default(20001));
    }
    if (validator_1.default.isEmpty(description)) {
        return ctx.body = (code_1.default(20002));
    }
    try {
        const { userId = `` } = ctx.userInfo;
        const cateInfo = await (article_1.cateModel.getCreateByTitle(title));
        if (!!cateInfo) {
            return ctx.body = (code_1.default(20003));
        }
        const params = {
            title: xss_1.default(title),
            createUser: userId,
            updateUser: userId,
            description: xss_1.default(description)
        };
        await article_1.cateModel.createCate(params);
        ctx.body = {
            code: 200,
            message: `成功.`
        };
    }
    catch (e) {
        ctx.body = (code_1.default(5000, e.message));
    }
};
/*
获取分类列表
*/
exports.list = async (ctx) => {
    try {
        ctx.body = {
            code: 200,
            data: {
                list: await article_1.cateModel.getCateList()
            }
        };
    }
    catch (e) {
        ctx.body = (code_1.default(5000, e.message));
    }
};
//# sourceMappingURL=cate.js.map