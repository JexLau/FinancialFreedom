import { Controller } from 'egg';
import { Delete, Get, Post, Prefix, Put } from 'egg-shell-decorators';

@Prefix('/api/v1/records')
export default class RecordController extends Controller {
  @Post('/createRecord')
  public async createRecord() {
    const { ctx } = this;
    try {
      const record: Api.Record.APostCreateRecord.Request = { UserId: ctx.request.body.UserId, RecordTypeId: ctx.request.body.RecordTypeId, Record: ctx.request.body.Record, Spend: ctx.request.body.Spend, RecordDate: ctx.request.body.RecordDate };
      const serviceRep = await ctx.service.record.CreateRecord(record);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  @Get('/record/:UserId')
  public async record() {
    const { ctx } = this;
    try {
      const record: Api.Record.AGetRecord.Request = { UserId: ctx.params.UserId };
      const serviceRep = await ctx.service.record.GetRecord(record);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  @Delete('/deleteRecord/:RecordId')
  public async deleteRecord() {
    const { ctx } = this;
    try {
      const record: Api.Record.ADeleteRecord.Request = { RecordId: ctx.params.RecordId };
      const serviceRep = await ctx.service.record.DeleteRecord(record);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }

  @Put('/updateRecord/:RecordId')
  public async updateRecord() {
    const { ctx } = this;
    try {
      const record: Api.Record.APutRecord.Request = { RecordId: ctx.params.RecordId, Record: ctx.request.body.Record };
      const serviceRep = await ctx.service.record.UpdateRecord(record);
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      const serviceRep = {
        code: 500,
        message: error.message,
        success: false,
      }
      ctx.body = serviceRep;
    }
  }
}
