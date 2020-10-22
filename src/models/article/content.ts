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
}

/*创建一篇文章*/
articleModel.statics.createArticle = (
    async function (para: CreateArticleParams) {
        const article = new this(para);
        return await article.save();
    }
);

/*方法*/
export default model(`Article`, articleModel) as Statics;
