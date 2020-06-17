import Router, {
    IRouterOptions
} from 'koa-router';

const routerConfig = {
    prefix: `/base`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

export default router;

import './pc';