import Router, {
    IRouterOptions
} from 'koa-router';

import {
    jwtSecret
} from './../../../config';

import koaJwt from 'koa-jwt';

/*导入路由模块*/
import userRouter from './user';

const routerConfig = {
    prefix: `/api`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

/*设置jwt*/
router.use(
    koaJwt({
        secret: jwtSecret
    }).unless({
        path: [/register/, /login/]
    })
);

/*初始化路由*/
userRouter(router);

export default router;