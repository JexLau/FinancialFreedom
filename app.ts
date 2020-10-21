import { Application, IBoot } from 'egg';
import { sequelize } from './app/utils/sequelize';

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    console.log('env:', this.app.config.env);
  }

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
    await sequelize.sync();
    console.log('database sync finish.')
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
