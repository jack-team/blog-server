import mongoose from 'mongoose';
import * as config from './../../config';

const connectSuccess = () => {
    console.log(`数据库连接成功..`);
};

const connectError = (err: mongoose.Error) => {
    console.log(`connect to %s error: `, config.db, err.message);
    process.exit(-1);
};

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err: Error) => {
    !err ? connectSuccess() :
        connectError(err);
});


/*载入模块*/
require('./user');