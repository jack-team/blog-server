import _dbConfig from './db.json';
import jwtConfig from './jwt.json';

const {
    NODE_ENV
} = process.env as any;

const dbConfig = (_dbConfig as any)[NODE_ENV] || {};

/*jwt配置*/
export const jwtSecret: string = jwtConfig.secret;

/*数据库配置*/
export const db: string = `mongodb://${dbConfig.userName}:${dbConfig.password}@${dbConfig.dbIp}:${dbConfig.port}/${dbConfig.dbName}?authSource=${dbConfig.authSource}`;
