declare namespace Api {
  namespace LoginComponent {
    /** 登录 */
    interface LoginPo {
      /** 登录手机号 */
      UserAccount: string;
      /** 登录密码 */
      Password: string;
    }
    /** 注册 */
    interface RegisterPo {
      /** 注册名 */
      UserName: string;
      /** 注册手机号 */
      UserAccount: string;
      /** 注册密码 */
      Password: string;
    }
  }
}
