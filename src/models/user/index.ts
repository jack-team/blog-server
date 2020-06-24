import {
    CreateSchema
} from '../schema';

import mongoose from 'mongoose';

import statics from './statics';

const {
    ObjectId
} = mongoose.Schema.Types;

const model = CreateSchema({
    userId: {
        unique: true,
        type: ObjectId,
        display: `用户Id`
    },
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

statics(model.statics);

mongoose.model(`User`, model);




