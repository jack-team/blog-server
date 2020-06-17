import mongoose from 'mongoose';

import * as config from './../../config';

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`数据库连接成功..`);
}).catch(err => {
    console.log(`connect to %s error: `, config.db, err.message);
    process.exit(-1);
});

import './user';