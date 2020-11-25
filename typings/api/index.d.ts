export interface ApiResponse<T> {
  /** 业务状态码 */
  code: number;
  /** 友好提示内容 */
  message: string;
  /** 业务状态码，true表操作成功，false表操作失败 */
  success: boolean;
  /** 业务数据对像 */
  data?: T;
}
