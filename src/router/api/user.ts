import Router from 'koa-router';

import * as Controllers from './../../controllers';

export default (router: Router) => {
    /*用户注册*/
    router.post(
        `/user/register`,
        Controllers.user.register
    );

    /*登录*/
    router.post(
        `/user/login`,
        Controllers.user.login
    );
};

