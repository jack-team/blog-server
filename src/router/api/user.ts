import {
    Context
} from 'koa';

/*api user 模块*/
import api from './index';

api.get(`/hello`, (ctx: Context) => {
    ctx.body = `hello`;
});