/// <reference path="./component.d.ts" />
declare namespace Api {
  namespace Login {
    /**
     ** 接口名称: Login
     ** 接口地址: /api/login/login
     ** 请求方式: POST
     ** 接口描述: 登录
     */
    namespace APostLogin {
      /** 请求 */
      interface Request extends Api.LoginComponent.LoginPo { }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.LoginComponent.LoginVo;
      }
    }

    /**
     ** 接口名称: Login
     ** 接口地址: /api/login/register
     ** 请求方式: POST
     ** 接口描述: 注册
     */
    namespace APostRegister {
      /** 请求 */
      interface Request extends Api.LoginComponent.RegisterPo { }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.LoginComponent.RegisterVo;
      }
    }

  }
}
