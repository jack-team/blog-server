import Router, {
    IRouterOptions
} from 'koa-router';

import notFound from './404';

const routerConfig = {
    prefix: `/error`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

notFound(router);

export default router;