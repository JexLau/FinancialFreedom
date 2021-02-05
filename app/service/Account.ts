import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
// import ApiException from '../exception/exception';
import { Accounts } from '../model/Accounts';
/**
 * Account Service
 */
export default class Account extends Service {

  /** 创建账户
   * @param Account - your account name
   */
  public async CreateAccount(Account: Api.Account.APostCreateAccount.Request) {
    try {
      await Accounts.create({
        Id: uuidv4(),
        UserId: Account.UserId,
        AccountName: Account.AccountName,
      });
    } catch (error) {
      // throw new Error(error.message);
      // throw new ApiException(ApiResponseCode.SERVER_ERROR, ApiResponseMsg.SERVER_ERROR);
    }
  }

  /** 获取用户账户
   * @param Account - userId
   */
  public async GetAccount(Account: Api.Account.AGetAccount.Request) {
    try {
      const AccountList: Api.AccountComponent.AccountVo[] = await Accounts.findAll({
        where: {
          UserId: Account.UserId,
        },
      });

      return AccountList;

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
 * @param Account - Account
 */
  public async UpdateAccount(Account: Api.Account.APutAccount.Request): Promise<Api.Account.APutAccount.Response> {
    try {
      const rowUpdated = await Accounts.update({
        AccountName: Account.AccountName,
      },
      {
        where: {
          Id: Account.AccountId,
        },
      },
      );

      if (rowUpdated.length) {
        return {
          code: 200,
          message: '更新成功',
          success: true,
        };
      }

      return {
        code: 404,
        message: '该账户不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
   * @param Account - Account
   */
  public async DeleteAccount(Account: Api.Account.ADeleteAccount.Request): Promise<Api.Account.ADeleteAccount.Response> {
    try {
      const rowDeleted = await Accounts.destroy({
        where: {
          Id: Account.AccountId,
        },
      });

      if (rowDeleted === 1) {
        return {
          code: 200,
          message: '删除成功',
          success: true,
        };
      }

      return {
        code: 404,
        message: '该账户不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
