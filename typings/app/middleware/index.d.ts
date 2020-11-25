// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthenticate from '../../../app/middleware/authenticate';
import ExportAuthorize from '../../../app/middleware/authorize';
import ExportToken from '../../../app/middleware/token';

declare module 'egg' {
  interface IMiddleware {
    authenticate: typeof ExportAuthenticate;
    authorize: typeof ExportAuthorize;
    token: typeof ExportToken;
  }
}
