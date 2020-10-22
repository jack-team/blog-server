import {
    Model
} from 'mongoose';

export interface CreateUser {
    phone?: string;
    userName?: string;
    password?: string;
}

export interface SearchUser extends CreateUser {
    _id?: string;
}

export interface Statics extends Model<any> {
    createUser(para: CreateUser): Promise<any>;
    getUserByUserName(userName: string): Promise<any>;
    getUserInfo(params: CreateUser): Promise<any>;
}

export default (statics: Statics) => {
    /*创建用户*/
    statics.createUser = (
        async function (para: CreateUser) {
            try {
                const user = new this(para);
                return await user.save();
            } catch (e) {
                return Promise.reject(e);
            }
        }
    );
    /*获取用户信息*/
    statics.getUserInfo = (
        async function (params: SearchUser) {
            try {
                return await this.findOne(params).exec();
            } catch (e) {
                return Promise.reject(e);
            }
        }
    );
};
