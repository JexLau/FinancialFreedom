import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
import { RecordTypes } from "../model/RecordTypes";
/**
 * RecordType Service
 */
export default class RecordType extends Service {

  /** 创建账户
   * @param RecordType - your account name
   */
  public async CreateRecordType(Account: Api.Account.APostCreateAccount.Request): Promise<Api.Account.APostCreateAccount.Response> {
    try {
      await RecordTypes.create({
        Id: uuidv4(),
        UserId: Account.UserId,
        AccountName: Account.AccountName,
      });

      return {
        code: 200,
        message: '创建账户成功',
        success: true
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 获取用户账户
   * @param UserId - userId
   */
  public async GetRecordType(Account: Api.Account.AGetAccount.Request): Promise<Api.Account.AGetAccount.Response> {
    try {
      const AccountList: Api.AccountComponent.AccountVo[] = await RecordTypes.findAll({
        where: {
          UserId: Account.UserId
        }
      })

      if (AccountList.length) {
        return {
          code: 200,
          message: '查询成功',
          success: true,
          data: AccountList
        }
      }

      return {
        code: 404,
        message: '该用户暂没有设置账户',
        success: false
      }

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
 * @param UserId - userId
 */
  public async UpdateRecordType(Account: Api.Account.APutAccount.Request): Promise<Api.Account.APutAccount.Response> {
    try {
      const rowUpdated = await RecordTypes.update({
        AccountName: Account.AccountName
      },
        {
          where: {
            Id: Account.AccountId
          }
        }
      );

      if (rowUpdated.length) {
        return {
          code: 200,
          message: '更新成功',
          success: true
        }
      }

      return {
        code: 404,
        message: '该账户不存在',
        success: true
      }

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
   * @param UserId - userId
   */
  public async DeleteRecordType(Account: Api.Account.ADeleteAccount.Request): Promise<Api.Account.ADeleteAccount.Response> {
    try {
      const rowDeleted = await RecordTypes.destroy({
        where: {
          Id: Account.AccountId
        }
      });

      if (rowDeleted === 1) {
        return {
          code: 200,
          message: '删除成功',
          success: true
        }
      }

      return {
        code: 404,
        message: '该账户不存在',
        success: true
      }

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
