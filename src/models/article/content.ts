import {
    model,
    Model,
    Schema
} from 'mongoose';

import {
    CreateSchema
} from '../schema';

const {
    ObjectId
} = Schema.Types;

const articleModel = CreateSchema({
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
    },
    spider: {
        type: String,
        display: `爬虫数据`
    }
});

interface CreateArticleParams {
    cateId: string;
    title: string;
    description: string;
    content: string;
    author: string;
}

interface Statics extends Model<any> {
    createArticle(params: CreateArticleParams): Promise<any>;
    getArticleById(id: string): Promise<any>;
}

/*创建一篇文章*/
articleModel.statics.createArticle = (
    async function (para: CreateArticleParams) {
        const article = new this(para);
        return await article.save();
    }
);

/*获取文章详情*/
articleModel.statics.getArticleById = (
    async function (id: string) {
        return this.findOne({
            _id: id,
            status: 1
        });
    }
);

/*方法*/
export default model(`Article`, articleModel) as Statics;
