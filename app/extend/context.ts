import { Context } from 'egg';
import { ApiResponseCode, ApiResponseMsg } from '../core/base';
import { baseFail, baseSuccess } from '../core/baseResponse';

export default {
  success<T>(this: Context, data?: T, code?: ApiResponseCode, message: string = ApiResponseMsg.SUCCESS) {
    this.body = baseSuccess<T>(data, code, message);
  },

  fail(this: Context, code: ApiResponseCode = ApiResponseCode.SERVER_ERROR, message: ApiResponseMsg = ApiResponseMsg.SERVER_ERROR) {
    this.body = baseFail(code, message);
  },
};
