"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (statics) => {
    /*创建用户*/
    statics.createUser = (async function (para) {
        try {
            const user = new this(para);
            return await user.save();
        }
        catch (e) {
            return Promise.reject(e);
        }
    });
    /*获取用户信息*/
    statics.getUserInfo = (async function (params) {
        try {
            return await this.findOne(params).exec();
        }
        catch (e) {
            return Promise.reject(e);
        }
    });
};
//# sourceMappingURL=statics.js.map