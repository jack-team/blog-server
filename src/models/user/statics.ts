import {
    Model
} from 'mongoose';

import {
    ObjectId
} from './../schema';

export interface CreateUser {
    phone: string;
    userName: string;
    password: string;
}

export interface Statics extends Model<any> {
    createUser(para: CreateUser): Promise<any>;
    getUserByUserName(userName: string): Promise<any>;
}

export default (statics: Statics) => {
    /*创建用户*/
    statics.createUser = (
        async function (para: CreateUser) {
            try {
                const user = new this({
                    ...para,
                    userId: ObjectId()
                });
                return await user.save();
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
    );
    /*根据用户名查找用户*/
    statics.getUserByUserName = (
        async function (userName: string) {
            const query = {
                userName: userName
            };
            try {
                return await this.
                findOne(query).exec();
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
    );
};