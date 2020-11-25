// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccounts from '../../../app/model/Accounts';
import ExportAuthCode from '../../../app/model/AuthCode';
import ExportClient from '../../../app/model/Client';
import ExportRecords from '../../../app/model/Records';
import ExportRecordTypes from '../../../app/model/RecordTypes';
import ExportRefreshToken from '../../../app/model/RefreshToken';
import ExportToken from '../../../app/model/Token';
import ExportUsers from '../../../app/model/Users';

declare module 'egg' {
  interface IModel {
    Accounts: ReturnType<typeof ExportAccounts>;
    AuthCode: ReturnType<typeof ExportAuthCode>;
    Client: ReturnType<typeof ExportClient>;
    Records: ReturnType<typeof ExportRecords>;
    RecordTypes: ReturnType<typeof ExportRecordTypes>;
    RefreshToken: ReturnType<typeof ExportRefreshToken>;
    Token: ReturnType<typeof ExportToken>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
