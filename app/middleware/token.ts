/** 通过授权码获取 accessToken
 *  生命周期：getClient --> getAuthorizationCode --> saveToken --> revokeAuthorizationCode
 */

import { Context } from 'egg';

export default function token() {
  return async (ctx: Context, next: () => Promise<any>) => {
    const token = ctx.app.oAuth2Server.token();
    await token(ctx, next);

    if (ctx.body.error_description) {
      ctx.body = {
        code: ctx.status,
        message: ctx.body.error_description.message,
        success: false,
      };
      ctx.status = 200;
      return;
    }

    if (ctx.status === 400 || ctx.status === 401) {
      ctx.body = {
        code: ctx.status,
        message: ctx.body.error_description.message,
        success: false,
      };
      ctx.status = 200;
    }
  };
}
