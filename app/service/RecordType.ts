import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
import { RecordTypes } from '../model/RecordTypes';
/**
 * RecordType Service
 */
export default class RecordType extends Service {

  /** 创建记录类型
   * @param RecordType - your account name
   */
  public async CreateRecordType(RecordType: Api.RecordType.APostCreateRecordType.Request): Promise<Api.RecordType.APostCreateRecordType.Response> {
    try {
      await RecordTypes.create({
        Id: uuidv4(),
        UserId: RecordType.UserId,
        TypeName: RecordType.RecordTypeName,
      });

      return {
        code: 200,
        message: '创建类型成功',
        success: true,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 获取用户账户
   * @param RecordType - RecordType
   */
  public async GetRecordType(RecordType: Api.RecordType.AGetRecordType.Request): Promise<Api.RecordType.AGetRecordType.Response> {
    try {
      const AccountList: Api.RecordComponent.RecordVo[] = await RecordTypes.findAll({
        where: {
          UserId: RecordType.UserId,
        },
      });

      if (AccountList.length) {
        return {
          code: 200,
          message: '查询成功',
          success: true,
          data: AccountList,
        };
      }

      return {
        code: 404,
        message: '该用户暂没有设置类型',
        success: false,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
 * @param RecordType - RecordType
 */
  public async UpdateRecordType(RecordType: Api.RecordType.APutRecordType.Request): Promise<Api.RecordType.APutRecordType.Response> {
    try {
      const rowUpdated = await RecordTypes.update({
        TypeName: RecordType.RecordTypeName,
      },
      {
        where: {
          Id: RecordType.RecordTypeId,
        },
      },
      );

      if (rowUpdated.length) {
        return {
          code: 200,
          message: '更新成功',
          success: true,
        };
      }

      return {
        code: 404,
        message: '该类型不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
   * @param RecordType - RecordType
   */
  public async DeleteRecordType(RecordType: Api.RecordType.ADeleteRecordType.Request): Promise<Api.RecordType.ADeleteRecordType.Response> {
    try {
      const rowDeleted = await RecordTypes.destroy({
        where: {
          Id: RecordType.RecordTypeId,
        },
      });

      if (rowDeleted === 1) {
        return {
          code: 200,
          message: '删除成功',
          success: true,
        };
      }

      return {
        code: 404,
        message: '该类型不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
