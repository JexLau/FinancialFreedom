/** 记录类型 */
import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'recordtypes'
})

export default class RecordTypes extends Model<RecordTypes> {
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
    comment: 'TypeName',
  })
  TypeName!: string

  @Column({
    allowNull: false,
    defaultValue: 'normal',
    comment: '状态，默认normal, 删除delete',
  })
  Status!: string

  @CreatedAt
  @Column
  CreatedAt!: Date;

  @UpdatedAt
  @Column
  UpdatedAt!: Date;
}
