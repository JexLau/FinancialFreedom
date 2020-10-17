import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/api/v1/login/login', controller.login.login);
  router.post('/api/v1/login/register', controller.login.register);
};
