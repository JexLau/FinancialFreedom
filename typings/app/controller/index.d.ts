// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/Account';
import ExportLogin from '../../../app/controller/Login';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    login: ExportLogin;
  }
}
