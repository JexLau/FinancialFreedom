import { Context } from 'egg';

/** 通过 accessToken 获取用户信息
 *  生命周期：getAccessToken
 */
export default function authenticate() {
  return async (ctx: Context, next: () => Promise<any>) => {
    const authenticate = ctx.app.oAuth2Server.authenticate();
    await authenticate(ctx, next);
    if (ctx.status === 400 || ctx.status === 401) {
      ctx.body = {
        code: ctx.status,
        message: ctx.response.message,
        success: false,
      };
      ctx.status = 200;
    }
  };
}
