import api from './api';

api.get(`/hello`, (ctx: any) => {
    ctx.body = `hello`;
});