import {
    model,
    Schema
} from 'mongoose';

import {
    CreateSchema
} from '../schema';

import statics, {
    Statics
} from './statics';

const {
    ObjectId
} = Schema.Types;

const userModel = CreateSchema({
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
        display: `用户状态`
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

statics(userModel.statics);

export default model(`User`, userModel) as Statics;




