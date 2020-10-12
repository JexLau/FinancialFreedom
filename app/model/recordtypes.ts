import { Application } from 'egg';

/** 每条记录的类别 */
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: 'Id',
      field: 'Id',
    },
    UserId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'UserId',
      field: 'UserId',
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'UserName',
      field: 'UserName',
    },
    TypeName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'TypeName',
      field: 'TypeName',
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'normal',
      comment: '状态，默认normal',
      field: 'Status',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '创建时间',
      field: 'CreatedAt',
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: '更新时间',
      field: 'UpdatedAt',
    },
  };
  const Recordtypes = app.model.define('recordtypes', attributes);
  return Recordtypes;
};
