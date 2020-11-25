import { Context } from 'egg';

/** 获取授权码
 *  生命周期：getClient --> getUser --> saveAuthorizationCode
 */
export default function authorize() {
  return async (ctx: Context, next: () => Promise<any>) => {
    const authenticate = ctx.app.oAuth2Server.authorize();
    await authenticate(ctx, next);
    if (ctx.status == 400 || ctx.status == 401) {
      ctx.body = {
        code: ctx.status,
        message: ctx.response.message,
        success: false,
      };
      ctx.status = 200;
    }
  };
}
