import Router from 'koa-router';
import * as Controllers from './../../controllers/spider';

const router = new Router({
    prefix: `/spider`
});

/*抓取分类*/
router.post(
    `/cate`,
    Controllers.cate
);

/*抓取文章*/
router.post(
    '/article',
    Controllers.articleDetail
);

export default router;
