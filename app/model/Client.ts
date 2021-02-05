/** 用户信息 */
import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'client',
})

export class Client extends Model<Client> {
  @Column({
    type: DataTypes.STRING(50),
    primaryKey: true,
    autoIncrement: false,
    comment: 'Client Id',
  })
  Id: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Client Secret',
  })
  Secret!: string;

  @Column({
    type: DataTypes.STRING(200),
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    comment: '客户端的回调 URL',
  })
  RedirectUri!: string;


  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '授权模式，比如授权码模式',
  })
  Grants!: string;

}
