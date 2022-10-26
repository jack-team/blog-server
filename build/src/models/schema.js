"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchema = void 0;
const mongoose_1 = require("mongoose");
/*创建集合*/
exports.CreateSchema = (fields) => {
    const _atType = {
        type: Date,
        default: Date.now()
    };
    /*默认增加创建时间和更新时间*/
    const _defaultFields = {
        createdAt: _atType,
        updatedAt: _atType
    };
    const _fields = Object.assign(Object.assign({}, fields), _defaultFields);
    const _timestamps = {
        createdAt: `createdAt`,
        updatedAt: `updatedAt`
    };
    return new mongoose_1.Schema(_fields, {
        timestamps: _timestamps
    });
};
//# sourceMappingURL=schema.js.map