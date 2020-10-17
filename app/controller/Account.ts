import { Controller } from 'egg';

export default class AccountController extends Controller {
  public async createAccount() {
    const { ctx } = this;
    try {
      const account: Api.Account.APostCreateAccount.Request = { UserId: ctx.request.body.UserId, AccountName: ctx.request.body.AccountName };
      const serviceRep = await ctx.service.account.CreateAccount(account);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  public async account() {
    const { ctx } = this;
    try {
      const account: Api.Account.AGetAccount.Request = { UserId: ctx.params.UserId };
      const serviceRep = await ctx.service.account.GetAccount(account);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  public async deleteAccount() {
    const { ctx } = this;
    try {
      const account: Api.Account.ADeleteAccount.Request = { AccountId: ctx.params.AccountId };
      const serviceRep = await ctx.service.account.DeleteAccount(account);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  public async updateAccount() {
    const { ctx } = this;
    try {
      const account: Api.Account.APutAccount.Request = { AccountId: ctx.params.AccountId, AccountName: ctx.request.body.AccountName };
      const serviceRep = await ctx.service.account.UpdateAccount(account);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }
}
