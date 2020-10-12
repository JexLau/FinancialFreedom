import { Service } from 'egg';

/**
 * Test Service
 */
export default class Login extends Service {

    /**
     * 登录
     * @param UserAccount - your phone number
     * @param Password - your password
     */
    public async Login(User: Api.LoginComponent.LoginPo) {
        try {
            const UserInfo = await this.ctx.model.Users.findOne({
                where: {
                    UserAccount: User.UserAccount,
                },
                raw: true,
            });

            if (UserInfo.Id) {

            }
            //   return null;
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
    public async Register() {
        // try {
        //     await this.ctx.model.Strategy.create({
        //         Id: data.Id,
        //         UserId,
        //         Name: data.Name,
        //         BacktestNum: 0,
        //     });
        //     return {
        //         Head: { Code: '200', Message: '保存成功！', Time: moment().format('YYYYMMDDHHmmss') },
        //         Result: {
        //             IsSave: true,
        //         },
        //     };
        // } catch (error) {
        //     throw new Error(error.message);
        // }
    }

}
