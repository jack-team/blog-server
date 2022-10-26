"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("../schema");
const { ObjectId } = mongoose_1.Schema.Types;
const articleModel = schema_1.CreateSchema({
    cateId: {
        type: ObjectId,
        display: `分类Id`,
        ref: `ArticleCate`
    },
    title: {
        type: String,
        display: `分类名`
    },
    description: {
        type: String,
        display: `描述`
    },
    content: {
        type: String,
        display: `内容`
    },
    author: {
        type: ObjectId,
        display: `作者Id`,
        ref: `User`
    },
    status: {
        type: Number,
        default: 1,
        display: `分类状态 0为禁用 1为启用 -1为删除`
    }
});
/*创建一篇文章*/
articleModel.statics.createArticle = (async function (para) {
    const article = new this(para);
    return await article.save();
});
/*获取文章详情*/
articleModel.statics.getArticleById = (async function (id) {
    return this.findOne({
        _id: id,
        status: 1
    });
});
/*方法*/
exports.default = mongoose_1.model(`Article`, articleModel);
//# sourceMappingURL=content.js.map