import * as Koa from 'koa';

const app = new Koa();

app.listen(6868, () => console.log(`server start at 6868...`));

