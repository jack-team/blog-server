"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const config_1 = require("./../../../config");
const koa_jwt_1 = __importDefault(require("koa-jwt"));
/*导入路由模块*/
const user_1 = __importDefault(require("./user"));
const article_1 = __importDefault(require("./article"));
const routerConfig = {
    prefix: `/api`
};
const router = (new koa_router_1.default(routerConfig));
const whitePaths = [
    `login`,
    `register`,
    `/article/detail`
];
router.use(koa_jwt_1.default({ secret: config_1.jwtSecret }).unless({
    path: whitePaths.map((path) => new RegExp(path))
}));
/*初始化路由*/
user_1.default(router);
article_1.default(router);
exports.default = router;
//# sourceMappingURL=index.js.map