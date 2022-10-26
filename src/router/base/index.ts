import Router from 'koa-router';
import * as Controllers from '../../controllers/index';

const router = new Router({
    prefix: `/site`
});

/*渲染admin站点*/
router.get(
    [`/admin`, `/admin(.*)`],
    Controllers.site.renderSiteHtml
);

/*爬虫主页*/
router.get(
    [`/spider`, `/spider(.*)`],
    Controllers.site.renderSpiderHtml
);

export default router;
