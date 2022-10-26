"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = exports.post = void 0;
const xss_1 = __importDefault(require("xss"));
const article_1 = require("./../../models/article");
const validator_1 = __importDefault(require("validator"));
const code_1 = __importDefault(require("./../../common/code"));
/*创建文章*/
exports.post = async (ctx) => {
    const { body } = ctx.request;
    const { title = ``, cateId = ``, content = ``, description = `` } = body;
    if (validator_1.default.isEmpty(cateId)) {
        return ctx.body = code_1.default(20004);
    }
    if (validator_1.default.isEmpty(title)) {
        return ctx.body = code_1.default(20005);
    }
    if (validator_1.default.isEmpty(content)) {
        return ctx.body = code_1.default(20006);
    }
    if (validator_1.default.isEmpty(description)) {
        return ctx.body = code_1.default(20007);
    }
    const { userId = `` } = ctx.userInfo;
    try {
        const para = {
            author: userId,
            title: xss_1.default(title),
            cateId: xss_1.default(cateId),
            content: xss_1.default(content),
            description: xss_1.default(description)
        };
        await article_1.articleModel.createArticle(para);
        ctx.body = {
            code: 200,
            message: `成功.`
        };
    }
    catch (e) {
        ctx.body = code_1.default(5000, e.message);
    }
};
/*获取详情*/
exports.detail = async (ctx) => {
    const { id = `` } = ctx.params;
    if (validator_1.default.isEmpty(id)) {
        return ctx.body = code_1.default(20008);
    }
    try {
        const article = await (article_1.articleModel.getArticleById(id));
        if (!article) {
            return ctx.body = code_1.default(20009);
        }
        ctx.body = {
            code: 200,
            data: article
        };
    }
    catch (e) {
        ctx.body = code_1.default(5000, e.message);
    }
};
//# sourceMappingURL=content.js.map