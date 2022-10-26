"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.base = exports.api = void 0;
/*api*/
const api_1 = __importDefault(require("./api"));
exports.api = api_1.default;
/*base router*/
const base_1 = __importDefault(require("./base"));
exports.base = base_1.default;
/*error router*/
const error_1 = __importDefault(require("./error"));
exports.error = error_1.default;
//# sourceMappingURL=index.js.map