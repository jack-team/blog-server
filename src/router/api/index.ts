import Router, {
    IRouterOptions
} from 'koa-router';

import {
    jwtSecret
} from './../../../config';

import koaJwt from 'koa-jwt';

/*导入路由模块*/
import userRouter from './user';
import articleRouter from './article';

const routerConfig = {
    prefix: `/api`
} as IRouterOptions;

const router = (
    new Router(
        routerConfig
    )
);

const whitePaths: Array<string> = [
    `login`,
    `register`,
    `/article/cate`,
    `/article/detail`
];

router.use(koaJwt({secret: jwtSecret}).unless({
    path: whitePaths.map((path: string) => new RegExp(path))
}));

/*初始化路由*/
userRouter(router);
articleRouter(router);

export default router;
