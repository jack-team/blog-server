import mongoose from 'mongoose';

import {
    createSchema
} from '../schema';

const {
    ObjectId
} = mongoose.Schema.Types;

const model = createSchema({
    /*
   * @用户Id
   */
    userId: {
        unique: true,
        type: ObjectId
    }
});

mongoose.model(`User`, model);





