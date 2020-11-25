/** 用户信息 */
import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'refreshtoken'
})

export class RefreshToken extends Model<RefreshToken> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    comment: 'Id',
  })
  Id: number

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'token',
  })
  Token!: string

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'ClientId',
  })
  ClientId!: string

  @Column({
    type: DataTypes.STRING(200),
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    comment: 'userId',
  })
  UserId!: string

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'ExpiresAt',
  })
  ExpiresAt!: string

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '授权范围',
  })
  Scope!: string

}
