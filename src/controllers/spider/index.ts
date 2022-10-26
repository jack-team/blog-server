import {
    Context
} from 'koa';

import errorCode from './../../common/code';

import * as Request from './../../utils/request';

import cateModal from './../../models/article/cate';
import articleModal from './../../models/article/content';

const cateUrl: string = (
    `https://apinew.juejin.im/tag_api/v1/query_category_briefs`
);

const recordUrl: string = (
    `https://apinew.juejin.im/recommend_api/v1/article/recommend_cate_fee`
);

/*抓取分类*/
export const cate = async (ctx: Context) => {
    const data = {
        show_type: 0
    };

    const params = {
        data: data,
        url: cateUrl
    };

    try {
        const {
            data: list = []
        } = await Request.get(params) as any;

        list.forEach(async (item: any) => {
            const params: any = {
                title: item.category_name,
                spider: JSON.stringify(item),
                description: item.category_name,
                createUser: `5f92a1b7f3260a1948c55751`,
                updateUser: `5f92a1b7f3260a1948c55751`
            };
            await cateModal.createCate(params);
        });

        ctx.body = list;

    } catch (e) {
        ctx.body = errorCode(5000, e.message);
    }
};


/*抓取文章*/
export const articleDetail = async (ctx: Context) => {
    const {
        body
    } = ctx.request;

    const {
        cateId,
        category_id
    } = body;

    try {
        /*获取最后一条数据*/
        const last = (
            await articleModal.findOne({})
        ) as any;

        const {
            spider = ``
        } = last || {};

        const _data = {
            limit: 20,
            id_type: 2,
            sort_type: 200,
            cursor: spider || `0`,
            cate_id: category_id
        };

        const params: any = {
            data: _data,
            url: recordUrl,
            headers: {
                referer: `https://juejin.im/`,
                cookie: `_ga=GA1.2.1691351463.1603372558; MONITOR_WEB_ID=9cc2ce6a-3c83-44c9-be14-c05fb9b34491; _gid=GA1.2.161257474.1604020034`
            }
        };

        console.log(params);

        const {
            data,
            cursor,
        } = await Request.post(params) as any;
    } catch (e) {
        console.log(e);
    }


    ctx.body = 1111;

};
