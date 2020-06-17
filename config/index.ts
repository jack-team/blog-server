import dbConfig from './db.json';

/*数据库配置*/
export const db = `mongodb://${dbConfig.userName}:${dbConfig.password}@${dbConfig.dbIp}:${dbConfig.port}/${dbConfig.dbName}?authSource=${dbConfig.authSource}`;