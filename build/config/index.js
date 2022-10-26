"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.jwtSecret = void 0;
const db_json_1 = __importDefault(require("./db.json"));
const jwt_json_1 = __importDefault(require("./jwt.json"));
const { NODE_ENV } = process.env;
const dbConfig = db_json_1.default[NODE_ENV] || {};
/*jwt配置*/
exports.jwtSecret = jwt_json_1.default.secret;
/*数据库配置*/
exports.db = `mongodb://${dbConfig.userName}:${dbConfig.password}@${dbConfig.dbIp}:${dbConfig.port}/${dbConfig.dbName}?authSource=${dbConfig.authSource}`;
//# sourceMappingURL=index.js.map