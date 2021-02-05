/** 用户信息 */
import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'authcode',
})

export class AuthCode extends Model<AuthCode> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    comment: 'Id',
  })
  Id: number;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'ClientId',
  })
  ClientId!: string;

  @Column({
    type: DataTypes.STRING(200),
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    comment: 'userId',
  })
  UserId!: string;


  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Code',
  })
  Code!: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'ExpiresAt',
  })
  ExpiresAt!: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '客户端回调 URL',
  })
  RedirectUri!: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '授权范围',
  })
  Scope!: string;
}
