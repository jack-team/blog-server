import Router, {
    IRouterOptions
} from 'koa-router';

const routerConfig = {
    prefix: `/error`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

export default router;

import './404';