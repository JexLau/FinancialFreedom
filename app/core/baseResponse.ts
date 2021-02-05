import { ApiResponse, ApiResponseCode, ApiResponseMsg } from './base.d';

export function baseSuccess<T>(data?: T, code?: ApiResponseCode, message?: string): ApiResponse<T> {
  return baseResponse<T>({ success: true, code: code || ApiResponseCode.SUCCESS, data, message: message || ApiResponseMsg.SUCCESS });
}

export function baseFail<T>(code: ApiResponseCode, message: ApiResponseMsg): ApiResponse<T> {
  return baseResponse<T>({ success: false, code, message });
}

export function baseResponse<T>({ success, code, message, data }: ApiResponse<T>): ApiResponse<T> {
  return {
    code,
    data,
    message,
    success,
  };
}
