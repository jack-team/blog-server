"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_ejs_1 = __importDefault(require("koa-ejs"));
const koa_body_1 = __importDefault(require("koa-body"));
const path_1 = __importDefault(require("./../utils/path"));
const error_1 = __importDefault(require("./middleware/error"));
const koa_static_cache_1 = __importDefault(require("koa-static-cache"));
const tokenUser_1 = __importDefault(require("./middleware/tokenUser"));
require('./models');
const router = __importStar(require("./router"));
const app = new koa_1.default();
app.use(koa_body_1.default());
/*配置静态路径*/
const staticConfig = {
    gzip: true,
    prefix: `/static`,
    maxAge: 365 * 24 * 60 * 60
};
app.use(koa_static_cache_1.default(path_1.default(`/static`), staticConfig));
/*配置模板引擎*/
koa_ejs_1.default(app, {
    cache: true,
    debug: true,
    layout: false,
    viewExt: `html`,
    root: path_1.default(`/src/views`)
});
/*配置错误重定向*/
app.use(error_1.default);
/*配置获取用户*/
app.use(tokenUser_1.default);
/*配置api路由*/
app.use(router.api.routes());
app.use(router.base.routes());
app.use(router.error.routes());
app.listen(6868, () => (console.log(`server start at 6868...`)));
//# sourceMappingURL=index.js.map