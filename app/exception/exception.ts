import { ApiResponseCode, ApiResponseMsg } from '../core/base';

export default class ApiException extends Error {
  code: ApiResponseCode;
  message: ApiResponseMsg;

  constructor(code: ApiResponseCode, message: ApiResponseMsg) {
    super(message);
    this.code = code;
    this.message = message;
    Object.setPrototypeOf(this, ApiException.prototype);
  }

}
