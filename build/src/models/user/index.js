"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("../schema");
const statics_1 = __importDefault(require("./statics"));
const { ObjectId } = mongoose_1.Schema.Types;
const userModel = schema_1.CreateSchema({
    userName: {
        unique: true,
        minLength: 6,
        maxLength: 20,
        type: String,
        display: `用户名`
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 30,
        select: false,
        display: `用户密码`
    },
    status: {
        type: Number,
        default: 1,
        display: `分类状态 0为禁用 1为启用 -1为删除`
    },
    phone: {
        type: String,
        length: 11,
        default: ``,
        display: `手机号码`
    },
    photos: [{
            id: {
                type: ObjectId,
                default: ``,
                display: `图片id`
            },
            url: {
                type: String,
                default: ``,
                display: `图片地址`
            },
            status: {
                type: Number,
                default: 1,
                display: `图片状态`
            },
            isAvatar: {
                type: Boolean,
                default: false,
                display: `是否为头像`
            }
        }],
    about: {
        type: String,
        default: ``,
        display: `个人介绍`
    },
    loginAt: {
        type: Date,
        display: `登录时间`,
        default: Date.now()
    }
});
statics_1.default(userModel.statics);
exports.default = mongoose_1.model(`User`, userModel);
//# sourceMappingURL=index.js.map