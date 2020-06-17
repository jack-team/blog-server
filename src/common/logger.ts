import log4js from 'log4js';
import path from './../../utils/path';

log4js.configure({
    appenders: {
        cheese: {
            type: `file`,
            filename: path(`logs/cheese.log`)
        }
    },
    categories: {
        default: {
            level: `ALL`,
            appenders: [`cheese`]
        }
    }
});

export default log4js.getLogger('cheese');