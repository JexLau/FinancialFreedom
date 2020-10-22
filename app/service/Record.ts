import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
import { Records } from "../model/Records";
/**
 * Account Service
 */
export default class Account extends Service {

  /** 创建账户
   * @param AccountName - your account name
   */
  public async CreateAccount(Account: Api.Account.APostCreateAccount.Request): Promise<Api.Account.APostCreateAccount.Response> {
    try {
      await Records.create({
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
  public async GetAccount(Account: Api.Account.AGetAccount.Request): Promise<Api.Account.AGetAccount.Response> {
    try {
      const AccountList: Api.AccountComponent.AccountVo[] = await Records.findAll({
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
  public async UpdateAccount(Account: Api.Account.APutAccount.Request): Promise<Api.Account.APutAccount.Response> {
    try {
      const rowUpdated = await Records.update({
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
  public async DeleteAccount(Account: Api.Account.ADeleteAccount.Request): Promise<Api.Account.ADeleteAccount.Response> {
    try {
      const rowDeleted = await Records.destroy({
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
