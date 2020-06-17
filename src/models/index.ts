import * as config from './../../config';
import mongoose, { Error } from 'mongoose';

const connectSuccess = () => {
    console.log(`数据库连接成功..`);
};

const connectError = (err: Error) => {
    console.log(`connect to %s error: `, config.db, err.message);
    process.exit(-1);
};

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(connectSuccess).catch(connectError);


/*载入模块*/
import './user';