// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccounts from '../../../app/model/Accounts';
import ExportRecords from '../../../app/model/Records';
import ExportRecordtypes from '../../../app/model/Recordtypes';
import ExportUsers from '../../../app/model/Users';

declare module 'egg' {
  interface IModel {
    Accounts: ReturnType<typeof ExportAccounts>;
    Records: ReturnType<typeof ExportRecords>;
    Recordtypes: ReturnType<typeof ExportRecordtypes>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
