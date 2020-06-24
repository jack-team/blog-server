import dbConfig from './db.json';
import jwtConfig from './jwt.json';

/*jwt配置*/
export const jwtSecret: string = jwtConfig.secret;

/*数据库配置*/
export const db: string = `mongodb://${dbConfig.userName}:${dbConfig.password}@${dbConfig.dbIp}:${dbConfig.port}/${dbConfig.dbName}?authSource=${dbConfig.authSource}`;