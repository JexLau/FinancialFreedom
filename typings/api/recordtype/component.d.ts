declare namespace Api {
  namespace RecordTypeComponent {
    /** 类型 */
    interface RecordTypePo {
      /** 类型名称 */
      TypeName: string;
      /** 状态 */
      Status?: string;
    }
    interface RecordTypeVo {
      Id?: string,
      UserId?: string,
      TypeName?: string,
      Status?: string,
      CreatedAt?: Date,
      UpdatedAt?: Date,
    }
  }
}
