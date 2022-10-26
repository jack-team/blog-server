import Koa from 'koa';
import koaEjs from 'koa-ejs';
import koaBody from 'koa-body';
import path from './../utils/path';
import error from './middleware/error';
import staticCache from 'koa-static-cache';
import tokenUser from './middleware/tokenUser';

/*载入数据模型*/
require('./models');

import * as router from './router';

const app = new Koa();

app.use(koaBody());

/*配置静态路径*/
const staticConfig = {
    gzip: true,
    prefix: `/static`,
    maxAge: 365 * 24 * 60 * 60
} as staticCache.Options;

app.use(staticCache(
    path(`/static`),
    staticConfig
));

/*配置模板引擎*/
koaEjs(app, {
    cache: true,
    debug: true,
    layout: false,
    viewExt: `html`,
    root: path(`/src/views`)
});

/*配置错误重定向*/
app.use(error);

/*配置获取用户*/
app.use(tokenUser);

/*配置api路由*/
app.use(router.api.routes());
app.use(router.base.routes());
app.use(router.error.routes());
app.use(router.spider.routes());

app.listen(6868, () => {
    console.log(`server start at 6868...`);
});




