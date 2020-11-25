declare namespace Api {
  namespace RecordComponent {
    /** 记录 */
    interface RecordPo {
      /** 记录Id */
      Id?: string;
      /** 用户Id */
      UserId?: string;
      /** 记录类型Id */
      RecordTypeId?: string;
      /** 记录 */
      Record?: string;
      /** 花费 */
      Spend?: number;
      /** 记录时间 */
      RecordDate?: Date;
      /** 状态 */
      Status?: string;
      /** 创建日期 */
      CreatedAt?: Date;
      /** 更新日期 */
      UpdatedAt?: Date;
    }
    interface RecordVo {
      Id?: string;
      UserId?: string;
      RecordTypeId?: string;
      Record?: string;
      Spend?: number;
      RecordDate?: Date;
      Status?: string;
      CreatedAt?: Date;
      UpdatedAt?: Date;
    }
  }
}
