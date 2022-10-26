"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("../schema");
const { ObjectId } = mongoose_1.Schema.Types;
const cateModel = schema_1.CreateSchema({
    title: {
        unique: true,
        type: String,
        display: `分类名`
    },
    status: {
        type: Number,
        default: 1,
        display: `分类状态 0为禁用 1为启用 -1为删除`
    },
    description: {
        type: String,
        display: `描述`
    },
    createUser: {
        type: ObjectId,
        display: `创建人`,
        ref: `User`
    },
    updateUser: {
        type: ObjectId,
        display: `更新人`,
        ref: `User`
    }
});
/*
* 创建分类
* */
cateModel.statics.createCate = (async function (para) {
    const user = new this(para);
    return await user.save();
});
/*根据标题获取分类*/
cateModel.statics.getCreateByTitle = (async function (title) {
    try {
        return await this.findOne({
            title: title
        }).exec();
    }
    catch (e) {
        return Promise.reject(e);
    }
});
cateModel.statics.getCateList = (function () {
    return this.find().populate({
        select: `userName`,
        path: `createUser updateUser`
    });
});
/*方法*/
exports.default = mongoose_1.model(`ArticleCate`, cateModel);
//# sourceMappingURL=cate.js.map