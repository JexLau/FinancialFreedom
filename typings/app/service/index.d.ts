// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAccount from '../../../app/service/Account';
import ExportLogin from '../../../app/service/Login';
import ExportRecord from '../../../app/service/Record';
import ExportRecordType from '../../../app/service/RecordType';

declare module 'egg' {
  interface IService {
    account: AutoInstanceType<typeof ExportAccount>;
    login: AutoInstanceType<typeof ExportLogin>;
    record: AutoInstanceType<typeof ExportRecord>;
    recordType: AutoInstanceType<typeof ExportRecordType>;
  }
}
