import { Application } from 'egg';

/** 用户的账户信息 */
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
      allowNull: false,
      comment: 'UserId',
      field: 'UserId',
    },
    AccountName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'AccountName',
      field: 'AccountName',
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
      comment: '创建时间',
      field: 'CreatedAt',
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '更新时间',
      field: 'UpdatedAt',
    },
  };
  const Accounts = app.model.define('accounts', attributes, {
    createdAt: 'CreatedAt',
    updatedAt: 'UpdatedAt'
  });
  return Accounts;
};
