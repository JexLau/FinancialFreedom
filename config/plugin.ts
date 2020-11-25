import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  oAuth2Server: {
    enable: true,
    package: 'egg-oauth2-server',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

export default plugin;
