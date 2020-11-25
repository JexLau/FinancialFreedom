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

  // 开启授权码模式和刷新 Token 模式
  config.oAuth2Server = {
    grants: ['authorization_code', 'refresh_token'],
  }

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  config.CRYPTOKEY = 'finance';

  return {
    ...config
  };
};
