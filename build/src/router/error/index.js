"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const _404_1 = __importDefault(require("./404"));
const routerConfig = {
    prefix: `/error`
};
const router = (new koa_router_1.default(routerConfig));
_404_1.default(router);
exports.default = router;
//# sourceMappingURL=index.js.map