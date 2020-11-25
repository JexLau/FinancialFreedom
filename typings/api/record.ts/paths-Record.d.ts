/// <reference path="./component.d.ts" />

declare namespace Api {
  namespace Record {
    /**
     ** 接口名称: Records
     ** 接口地址: /api/v1/records/record/:userId
     ** 请求方式: Get
     ** 接口描述: 获取用户所有记录
     */
    namespace AGetRecord {
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
        data?: Api.RecordComponent.RecordVo[];
      }
    }

    /**
     ** 接口名称: Records
     ** 接口地址: /api/v1/account/createAccount
     ** 请求方式: POST
     ** 接口描述: 登录
     */
    namespace APostCreateRecord {
      /** 请求 */
      interface Request {
        UserId: string;
        RecordTypeId: string;
        Record: string;
        Spend: number;
        RecordDate: Date;
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
        data?: Api.RecordComponent.RecordVo;
      }
    }

    /**
     ** 接口名称: Records
     ** 接口地址: /api/v1/account/updateAccount/:accountId
     ** 请求方式: PUT
     ** 接口描述: 修改账户相关信息
     */
    namespace APutRecord {
      /** 请求 */
      interface Request {
        RecordId: string
        Record: string
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
        data?: Api.RecordComponent.RecordVo;
      }
    }

    /**
     ** 接口名称: Records
     ** 接口地址: /api/v1/account/delAccount/:accountId
     ** 请求方式: DELETE
     ** 接口描述: 删除账户相关信息
     */
    namespace ADeleteRecord {
      /** 请求 */
      interface Request {
        RecordId: string
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
        data?: Api.RecordComponent.RecordVo;
      }
    }
  }
}
