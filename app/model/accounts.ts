/** 用户的账户信息 */
import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'accounts'
})

export class Accounts extends Model<Accounts> {
  @Column({
    type: DataTypes.STRING(50),
    primaryKey: true,
    autoIncrement: false,
    comment: 'Id',
  })
  Id: string

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'UserId',
  })
  UserId!: string

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'AccountName',
  })
  AccountName!: string

  @Column({
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'normal',
    comment: '状态，默认normal',
  })
  Status!: string

  @CreatedAt
  @Column
  CreatedAt!: Date;

  @UpdatedAt
  @Column
  UpdatedAt!: Date;
}

