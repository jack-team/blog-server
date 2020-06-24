import Router from 'koa-router';
import * as Controllers from '../../controllers/index';

const router = new Router({
    prefix: `/site`
});

/*渲染admin站点*/
router.get(
    [`/`, `/(.*)`],
    Controllers.site.renderSiteHtml
);

export default router;