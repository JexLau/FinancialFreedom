
// import { Application } from 'egg';
import { Client } from '../model/Client';
import { Users } from '../model/Users';
import { Token as TokenModel } from '../model/Token';
import { RefreshToken } from '../model/RefreshToken';
import { AuthCode } from '../model/AuthCode';
import { cryptoMd5 } from '../utils/crypto';

const CRYPTOKEY = 'finance';

export default function oAuth2Server() {
  class Model {
    /** 获取客户端信息
     * @param {*} ClientId 要查询的客户端 id
     * @param {*} ClientSecret 要校验的客户端密钥
     * @return {*} object
     */
    async getClient(ClientId, ClientSecret) {
      console.log('getClient', ClientId, ClientSecret);
      const client = await Client.findOne({
        where: {
          Id: ClientId,
          Secret: ClientSecret,
        },
        raw: true,
      });

      if (!client) return false;

      return client;

    }

    /** 实现用户认证
     * 授权码模式需要实现用户认证
     * user 对象对 oauth2-server 完全透明，并且仅用作其他模型函数的输入。
     * 这两个参数来自于用户调用获取token接口时传的username和password
     * @param {*} UserAccount 用户名
     * @param {*} Password 密码
     * @return {*} 返回用户信息
     */
    async getUser(UserAccount, Password) {
      console.log('getUser', UserAccount, Password);
      const md5Password = cryptoMd5(CRYPTOKEY, Password);
      const user = await Users.findOne({
        where: {
          UserAccount,
        },
        raw: true,
      });

      // 找不到用户
      if (!user) {
        throw { code: 404, message: 'user does not exist', success: false };
      }
      // 账号密码不正确
      if (user.Password !== md5Password) {
        throw { code: 403, message: 'password is not correct', success: false };
      }

      return user;
    }

    /** 保存授权码信息
     *
     * @param {*} Code 要保存的授权码信息
     * @param {*} Client 要保存的客户端信息
     * @param {*} User 要保存的用户信息
     * @memberof Model
     */
    async saveAuthorizationCode(Code, Client, User) {
      console.log('saveAuthorizationCode', Code, Client, User);
      try {
        const code = {
          Code: Code.Code,
          ExpiresAt: Code.ExpiresAt,
          RedirectUri: Code.RedirectUri,
          Scope: Code.Scope || '',
          ClientId: Client.Id,
          UserId: User.Id,
        };
        // 1. 保存授权码信息到数据库
        await AuthCode.create(code);

        return {
          Code: code.Code,
          ExpiresAt: code.ExpiresAt,
          RedirectUri: code.RedirectUri,
          Scope: code.Scope,
          Client: { id: code.ClientId },
          User: { id: code.UserId },
        };
      } catch (error) {
        return false;
      }
    }

    /** 获取授权码信息
     * 查询通过 saveAuthorizationCode() 方法存储过的授权码信息，并返回
     * @param {*} Code 要查询的授权码 id
     * @return {*} object
     * @memberof Model
     */
    async getAuthorizationCode(Code) {
      console.log('getAuthorizationCode', Code);
      // 1. 从数据库中查询授权码信息
      const authCode = await AuthCode.findOne({
        where: {
          Code,
        },
      });
      if (!authCode) return false;

      const user = await Users.findOne({
        where: {
          Id: authCode.UserId,
        },
      });
      if (!user) return false;

      return {
        Code: authCode.Code,
        ExpiresAt: authCode.ExpiresAt,
        RedirectUri: authCode.RedirectUri,
        Scope: authCode.Scope,
        Client: { id: authCode.ClientId },
        User: { id: authCode.UserId },
      };
    }

    /** 保存 token 令牌，包括访问令牌和刷新令牌。
     * @param {*} Token 要保存的 token 令牌
     * @param {*} Client 要保存的客户端信息
     * @param {*} User 要保存的用户信息
     * @return {*} object
     * @memberof Model
     */
    async saveToken(Token, Client, User) {
      console.log('saveToken', Token, Client, User);
      try {
        // 1.保存访问令牌
        const accessToken = await TokenModel.create({
          Token: Token.accessToken,
          ExpiresAt: Token.accessTokenExpiresAt,
          Scope: Token.scope || '',
          ClientId: Client.id,
          UserId: User.id,
        });

        // 2.保存刷新令牌
        const refreshToken = await RefreshToken.create({
          Token: Token.refreshToken,
          ExpiresAt: Token.refreshTokenExpiresAt,
          Scope: Token.scope || '',
          ClientId: Client.id,
          UserId: User.id,
        });

        // 3.返回保存的令牌信息
        return {
          accessToken: accessToken.Token,
          accessTokenExpiresAt: accessToken.ExpiresAt,
          refreshToken: refreshToken.Token,
          refreshTokenExpiresAt: refreshToken.ExpiresAt,
          scope: accessToken.Scope,
          client: { id: accessToken.ClientId },
          user: { id: accessToken.UserId },
        };
      } catch (error) {
        return false;
      }
    }

    /** 获取访问令牌信息。
 * @param {*} AccessToken 要查询的访问令牌
 * @return {*} object
 * @memberof Model
 */
    async getAccessToken(AccessToken) {
      console.log('getAccessToken', AccessToken);
      try {
        // 1. 查询数据库，获取访问密钥信息
        const token = await TokenModel.findOne({
          where: {
            token: AccessToken,
          },
        });
        // 2. 查询数据库，获取客户端信息
        // const client = await this.ctx.model.Client.findOne({
        //   clientId: accessToken.client.clientId,
        // });
        // 3. 查询数据库，获取用户信息
        // const user = await this.ctx.model.User.findOne({
        //   userId: accessToken.user.userId,
        // });

        if (!token) return false;

        // 4. 返回数据
        return {
          accessToken: token.Token,
          accessTokenExpiresAt: token.ExpiresAt,
          scope: token.Scope,
          client: { id: token.ClientId },
          user: { id: token.UserId },
        };
      } catch (error) {
        return false;
      }
    }

    /** 吊销刷新令牌
     * @param {*} Token 要删除的刷新令牌 Object
     * @return {*} object
     * @memberof Model
     */
    async revokeToken(Token) {
      console.log('revokeToken', Token);
      try {
        // 查询数据库并删除刷新令牌
        return await RefreshToken.destroy({
          where: {
            Token: Token.RefreshToken,
          },
        });
      } catch (error) {
        return false;
      }
    }

    /** 吊销授权码信息
     *
     * @param {*} Code 要吊销的授权码信息
     * @return {*} object
     * @memberof Model
     */
    async revokeAuthorizationCode(Code) {
      console.log('revokeAuthorizationCode', Code);
      try {
        return await AuthCode.destroy({
          where: {
            Code: Code.Code,
          },
        });
      } catch (error) {
        return false;
      }
    }
    /** 获取刷新令牌信息
     * @param {*} Rtoken 要查询的刷新令牌 id
     * @return {*} object
     * @memberof Model
     */
    async getRefreshToken(Rtoken) {
      console.log('getRefreshToken', Rtoken);
      try {
        // 1. 查询数据库获取刷新令牌
        const token = await RefreshToken.findOne({
          where: {
            Token: Rtoken,
          },
        });
        if (!token) return false;

        // 2. 返回数据
        return {
          refreshToken: token.Token,
          refreshTokenExpiresAt: token.ExpiresAt,
          scope: token.Scope,
          client: { id: token.ClientId }, // with 'id' property
          user: { id: token.UserId },
        };
      } catch (error) {
        return false;
      }
    }
  }
  return Model;
}
