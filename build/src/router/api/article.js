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
Object.defineProperty(exports, "__esModule", { value: true });
const Controllers = __importStar(require("./../../controllers/article"));
exports.default = (router) => {
    /*创建文章分类*/
    router.post(`/article/cate`, Controllers.cate.create);
    /*获取分类列表*/
    router.get(`/article/cate`, Controllers.cate.list);
    /*创建文章*/
    router.post(`/article/post`, Controllers.content.post);
    /*获取文章内容*/
    router.get(`/article/detail/:id`, Controllers.content.detail);
};
//# sourceMappingURL=article.js.map