import { Controller } from 'egg';
import { Get, Middleware, Post, Prefix } from 'egg-shell-decorators';
import authorize from '../middleware/authorize';
import token from '../middleware/token';

@Prefix('/api/v1/users')
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
      };
      ctx.body = serviceRep;
    }
  }

  @Post('/register')
  public async register() {
    const { ctx } = this;
    try {
      const user: Api.Login.APostRegister.Request = ctx.request.body;
      console.log(user);
      const serviceRep = await ctx.service.login.Register(user);
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

  @Get('/login/auth')
  async loginPage() {
    const { ctx } = this;
    const query = ctx.querystring;
    console.log(query);
    await this.ctx.render('login.ejs', {
      title: 'FF账户登录中心',
      query,
    });
  }

  @Middleware([ authorize() ])
  @Get('/authorize')
  async authorize() {
    const { ctx } = this;
    const query = ctx.querystring;
    console.log('authorize', query);
  }

  @Get('/token')
  @Middleware([ token() ])
  async token() {
    console.log('====================get token====================');
  }
}
