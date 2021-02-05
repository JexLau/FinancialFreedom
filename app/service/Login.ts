import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
import { Users } from '../model/Users';
/**
 * Login Service
 */
export default class Login extends Service {

  /** 登录
     * @param User - your phone number
     */
  public async Login(User: Api.Login.APostLogin.Request): Promise<Api.Login.APostLogin.Response> {
    try {
      const UserInfo = await Users.findOne({
        where: {
          UserAccount: User.UserAccount,
        },
        raw: true,
      });

      if (UserInfo) {
        if (User.Password === UserInfo.Password) {
          return {
            code: 200,
            message: '登录成功',
            success: true,
          };
        }
        return {
          code: 401,
          message: '账户或密码不正确',
          success: false,
        };


      }

      return {
        code: 404,
        message: '账户不正确',
        success: false,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
     * 注册
     * @param User - User
     */
  public async Register(User: Api.Login.APostRegister.Request): Promise<Api.Login.APostRegister.Response> {
    try {
      const { ctx } = this;

      const Id = uuidv4();

      const user = await Users.findOne({
        where: {
          UserAccount: User.UserAccount,
        },
      });

      if (!user?.Id) {
        await Users.create({
          Id,
          UserName: User.UserName,
          UserAccount: User.UserAccount,
          Password: User.Password,
        });
        await ctx.service.account.CreateAccount({ UserId: Id, AccountName: '默认账户' });
        await ctx.service.recordType.CreateRecordType({ UserId: Id, RecordTypeName: '默认类型' });

        return {
          code: 200,
          message: '注册成功',
          success: true,
        };
      }

      return {
        code: 403,
        message: '账户已注册',
        success: false,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

}
