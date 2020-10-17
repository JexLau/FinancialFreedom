import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/api/v1/login/login', controller.login.login);
  router.post('/api/v1/login/register', controller.login.register);

  router.get('/api/v1/account/account/:UserId', controller.account.account);
  router.post('/api/v1/account/createAccount', controller.account.createAccount);
  router.put('/api/v1/account/updateAccount/:AccountId', controller.account.updateAccount);
  router.delete('/api/v1/account/deleteAccount/:AccountId', controller.account.deleteAccount);
};
