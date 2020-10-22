import {
    Model,
    model,
    Schema
} from 'mongoose';

import {
    CreateSchema
} from '../schema';

const {
    ObjectId
} = Schema.Types;

const cateModel = CreateSchema({
    title: {
        unique: true,
        type: String,
        display: `分类名`
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

interface CreatePara {
    title: string;
    description: string;
    createUser: string;
    updateUser: string;
}

interface Statics extends Model<any> {
    getCateList(): Promise<any>;
    createCate(para: CreatePara): Promise<any>;
    getCreateByTitle(title: string): Promise<any>;
}

/*
* 创建分类
* */
cateModel.statics.createCate = (
    async function (para: CreatePara) {
        const user = new this(para);
        return await user.save();
    }
);

/*根据标题获取分类*/
cateModel.statics.getCreateByTitle = (
    async function (title: string) {
        try {
            return await this.findOne({
                title: title
            }).exec();
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
);

cateModel.statics.getCateList = (
    function () {
        return this.find().populate({
            select: `userName`,
            path: `createUser updateUser`
        });
    }
);

/*方法*/
export default model(`ArticleCate`, cateModel) as Statics;
