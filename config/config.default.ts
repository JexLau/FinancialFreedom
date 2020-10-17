import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602503342918_4824';

  // add your egg config in here
  config.middleware = [];

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 数据库
  config.sequelize = {
    database: 'finance',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    timezone: '+00:00',
    logging: false,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
