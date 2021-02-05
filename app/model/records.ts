/** 记录 */
import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'records',
})

export class Records extends Model<Records> {
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
    comment: 'UserId',
  })
  UserId!: string;

  @Column({
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'RecordTypeId',
  })
  RecordTypeId!: string;

  @Column({
    type: DataTypes.STRING(255),
    comment: 'Record',
  })
  Record!: string;

  @Column({
    type: DataTypes.DECIMAL,
    comment: 'Spend',
  })
  Spend!: number;

  @Column({
    type: DataTypes.DATE,
    comment: 'RecordDate',
  })
  RecordDate!: Date;

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
