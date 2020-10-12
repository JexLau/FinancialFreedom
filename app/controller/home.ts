import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.login.Login();
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      ctx.body = {
        Head: { Code: '500', Message: '发生错误！' },
        Result: {
          ErrorMsg: error.message,
        },
      };
    }
  }
}
