import { Controller } from 'egg';
import { Post, Prefix } from 'egg-shell-decorators';

@Prefix('/api/v1/login')
export default class LoginController extends Controller {
  @Post('/login')
  public async login() {
    const { ctx } = this;
    try {
      const user: Api.Login.APostLogin.Request = ctx.request.body;
      const serviceRep = await ctx.service.login.Login(user);
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

  @Post('/register')
  public async register() {
    const { ctx } = this;
    try {
      const user: Api.Login.APostRegister.Request = ctx.request.body;
      console.log(user)
      const serviceRep = await ctx.service.login.Register(user);
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
