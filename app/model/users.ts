/** 用户信息 */
import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'users',
})

export class Users extends Model<Users> {
  @Column({
    type: DataTypes.STRING(50),
    primaryKey: true,
    autoIncrement: false,
    comment: 'Id',
  })
  Id: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'UserName',
  })
  UserName!: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    comment: 'UserAccount',
  })
  UserAccount!: string;


  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Password',
  })
  Password!: string;

  @Column({
    allowNull: false,
    defaultValue: 'normal',
    comment: '状态，默认normal, 删除delete',
  })
  Status!: string;

  @CreatedAt
  @Column
  CreatedAt!: Date;

  @UpdatedAt
  @Column
  UpdatedAt!: Date;
}
