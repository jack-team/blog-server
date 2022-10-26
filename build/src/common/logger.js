"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
const path_1 = __importDefault(require("./../../utils/path"));
log4js_1.default.configure({
    appenders: {
        cheese: {
            type: `file`,
            filename: path_1.default(`logs/cheese.log`)
        }
    },
    categories: {
        default: {
            level: `ALL`,
            appenders: [`cheese`]
        }
    }
});
exports.default = log4js_1.default.getLogger('cheese');
//# sourceMappingURL=logger.js.map