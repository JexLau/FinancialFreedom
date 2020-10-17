import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
/**
 * Login Service
 */
export default class Login extends Service {

    /** 登录
     * @param UserAccount - your phone number
     * @param Password - your password
     */
    public async Login(User: Api.Login.APostLogin.Request): Promise<Api.Login.APostLogin.Response> {
        try {
            const UserInfo = await this.ctx.model.Users.findOne({
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
                        success: true
                    }
                } else {
                    return {
                        code: 401,
                        message: '账户或密码不正确',
                        success: false
                    }
                }

            }

            return {
                code: 404,
                message: '账户不正确',
                success: false
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * 注册
     * @param UserName - your name
     * @param UserAccount - your phone number
     * @param Password - your password
     */
    public async Register(User: Api.Login.APostRegister.Request): Promise<Api.Login.APostRegister.Response> {
        try {
            await this.ctx.model.Users.create({
                Id: uuidv4(),
                UserName: User.UserName,
                UserAccount: User.UserAccount,
                Password: User.Password,
            });

            return {
                code: 200,
                message: '注册成功',
                success: true
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
