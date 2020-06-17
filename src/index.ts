import Koa from 'koa';
import staticCache from 'koa-static-cache';
import path from './../utils/path';

import './models';

import * as router from './router';

const app = new Koa();

/*配置静态路径*/
app.use(staticCache(path(`/static`), {
    maxAge: 365 * 24 * 60 * 60
}));


/*配置api路由*/
app.use(router.api.routes());

app.listen(6868, () => (
    console.log(`server start at 6868...`)
));



