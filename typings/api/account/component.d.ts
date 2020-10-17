declare namespace Api {
  namespace AccountComponent {
    /** 账户 */
    interface AccountPo {
      /** 账户名称 */
      AccountName: string;
      /** 状态 */
      Status?: string;
    }
    interface AccountVo {
      Id?: string,
      UserId?: string,
      AccountName?: string,
      Status?: string,
      CreatedAt?: Date,
      UpdatedAt?: Date,
    }
  }
}
