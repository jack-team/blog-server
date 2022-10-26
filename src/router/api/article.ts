import Router from 'koa-router';

import * as Controllers from './../../controllers/article';

export default (router: Router) => {
    /*创建文章分类*/
    router.post(
        `/post/cate`,
        Controllers.cate.create
    );

    /*获取分类列表*/
    router.get(
        `/article/cate`,
        Controllers.cate.list
    );

    /*创建文章*/
    router.post(
        `/article/post`,
        Controllers.content.post
    );

    /*获取文章内容*/
    router.get(
        `/article/detail/:id`,
        Controllers.content.detail
    );
};
