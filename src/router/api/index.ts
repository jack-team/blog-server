import Router, {
    IRouterOptions
} from 'koa-router';

const routerConfig = {
    prefix: `/api`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

export default router;

/*路由模块*/
import './user';