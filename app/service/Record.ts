import { Service } from 'egg';
import { v4 as uuidv4 } from 'uuid';
import { Records } from '../model/Records';
/**
 * Record Service
 */
export default class Record extends Service {

  /** 创建账户
   * @param Record - your Record
   */
  public async CreateRecord(Record: Api.Record.APostCreateRecord.Request): Promise<Api.Record.APostCreateRecord.Response> {
    try {
      await Records.create({
        Id: uuidv4(),
        UserId: Record.UserId,
        RecordTypeId: Record.RecordTypeId,
        Record: Record.Record,
        Spend: Record.Spend,
        RecordDate: Record.RecordDate,
      });

      return {
        code: 200,
        message: '创建记录成功',
        success: true,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 获取用户账户
   * @param Record - Record
   */
  public async GetRecord(Record: Api.Record.AGetRecord.Request): Promise<Api.Record.AGetRecord.Response> {
    try {
      const RecordList: Api.RecordComponent.RecordVo[] = await Records.findAll({
        where: {
          UserId: Record.UserId,
        },
      });

      if (RecordList.length) {
        return {
          code: 200,
          message: '查询成功',
          success: true,
          data: RecordList,
        };
      }

      return {
        code: 404,
        message: '该用户暂没有设置账户',
        success: false,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
 * @param Record - Record
 */
  public async UpdateRecord(Record: Api.Record.APutRecord.Request): Promise<Api.Record.APutRecord.Response> {
    try {
      const rowUpdated = await Records.update({
        Record: Record.Record,
      },
      {
        where: {
          Id: Record.RecordId,
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
        message: '该账户不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }

  /** 删除用户账户
   * @param Record - Record
   */
  public async DeleteRecord(Record: Api.Record.ADeleteRecord.Request): Promise<Api.Record.ADeleteRecord.Response> {
    try {
      const rowDeleted = await Records.destroy({
        where: {
          Id: Record.RecordId,
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
        message: '该账户不存在',
        success: true,
      };

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
