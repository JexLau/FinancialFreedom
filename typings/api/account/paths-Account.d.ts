/// <reference path="./component.d.ts" />
declare namespace Api {
  namespace Account {
    /**
     ** 接口名称: Account
     ** 接口地址: /api/v1/account/account/:userId
     ** 请求方式: Get
     ** 接口描述: 获取用户所有账户
     */
    namespace AGetAccount {
      /** 请求 */
      interface Request {
        UserId: string
      }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.AccountComponent.AccountVo[];
      }
    }

    /**
     ** 接口名称: Account
     ** 接口地址: /api/v1/account/createAccount
     ** 请求方式: POST
     ** 接口描述: 登录
     */
    namespace APostCreateAccount {
      /** 请求 */
      interface Request {
        UserId: string;
        AccountName: string;
      }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.AccountComponent.AccountVo;
      }
    }

    /**
     ** 接口名称: Account
     ** 接口地址: /api/v1/account/updateAccount/:accountId
     ** 请求方式: PUT
     ** 接口描述: 修改账户相关信息
     */
    namespace APutAccount {
      /** 请求 */
      interface Request {
        AccountId: string
        AccountName: string
      }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.AccountComponent.AccountVo;
      }
    }

    /**
     ** 接口名称: Account
     ** 接口地址: /api/v1/account/delAccount/:accountId
     ** 请求方式: DELETE
     ** 接口描述: 删除账户相关信息
     */
    namespace ADeleteAccount {
      /** 请求 */
      interface Request {
        AccountId: string
      }

      /** 响应 */
      interface Response {
        /** 业务状态码,200表业务操作成功 */
        code: number;
        /** 友好提示内容 */
        message: string;
        /** 业务状态码，true表操作成功，false表操作失败 */
        success: boolean;
        /** 业务数据对像 */
        data?: Api.AccountComponent.AccountVo;
      }
    }
  }
}
