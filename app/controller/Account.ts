import { Controller } from 'egg';
import { Get, Post, Delete, Put, Prefix, Middleware } from 'egg-shell-decorators';
import authenticate from '../middleware/authenticate';

@Prefix('/api/v1/accounts')
export default class AccountController extends Controller {
  @Post('/createAccount')
  @Middleware([ authenticate() ])
  public async createAccount() {
    const { ctx } = this;

    try {
      const account = { UserId: ctx.request.body.UserId, AccountName: ctx.request.body.AccountName };
      await ctx.service.account.CreateAccount(account);
      this.ctx.success();
    } catch (error) {
      console.log(error.stack);
      this.ctx.fail();
    }
  }

  @Get('/account/:UserId')
  @Middleware([ authenticate() ])
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
      };
      ctx.body = serviceRep;
    }
  }

  @Delete('/deleteAccount/:AccountId')
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
      };
      ctx.body = serviceRep;
    }
  }

  @Put('/updateAccount/:AccountId')
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
      };
      ctx.body = serviceRep;
    }
  }
}
