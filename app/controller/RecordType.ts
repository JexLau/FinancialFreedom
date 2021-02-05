import { Controller } from 'egg';
import { Delete, Get, Post, Prefix, Put } from 'egg-shell-decorators';

@Prefix('/api/v1/recordtypes')
export default class RecordTypeController extends Controller {
  @Post('/createRecordType')
  public async createRecordType() {
    const { ctx } = this;
    try {
      const recordtype: Api.RecordType.APostCreateRecordType.Request = { UserId: ctx.request.body.UserId, RecordTypeName: ctx.request.body.RecordTypeName };
      const serviceRep = await ctx.service.recordType.CreateRecordType(recordtype);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      };
      ctx.body = serviceRep;
    }
  }

  @Get('/recordtype/:UserId')
  public async recordType() {
    const { ctx } = this;
    try {
      const recordtype: Api.RecordType.AGetRecordType.Request = { UserId: ctx.params.UserId };
      const serviceRep = await ctx.service.recordType.GetRecordType(recordtype);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      };
      ctx.body = serviceRep;
    }
  }

  @Delete('/deleteRecordtype/:RecordTypeId')
  public async deleteRecordtype() {
    const { ctx } = this;
    try {
      const recordtype: Api.RecordType.ADeleteRecordType.Request = { RecordTypeId: ctx.params.RecordTypeId };
      const serviceRep = await ctx.service.recordType.DeleteRecordType(recordtype);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      };
      ctx.body = serviceRep;
    }
  }

  @Put('/updateRecordtype/:RecordTypeId')
  public async updateRecordtype() {
    const { ctx } = this;
    try {
      const recordtype: Api.RecordType.APutRecordType.Request = { RecordTypeId: ctx.params.RecordTypeId, RecordTypeName: ctx.request.body.RecordTypeName };
      const serviceRep = await ctx.service.recordType.UpdateRecordType(recordtype);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      };
      ctx.body = serviceRep;
    }
  }
}
