import { Application } from 'egg';

/** 用户信息 */
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
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'UserName',
      field: 'UserName',
    },
    UserAccount: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'UserAccount',
      field: 'UserAccount',
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'Password',
      field: 'Password',
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
  const Users = app.model.define('users', attributes, {
    createdAt: 'CreatedAt',
    updatedAt: 'UpdatedAt'
  });
  return Users;
};
