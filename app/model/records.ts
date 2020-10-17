import { Application } from 'egg';

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
    RecordTypeId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'RecordTypeId',
      field: 'RecordTypeId',
    },
    Record: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Record',
      field: 'Record',
    },
    Spend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'Spend',
      field: 'Spend',
    },
    RecordDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'RecordDate',
      field: 'RecordDate',
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
  const Records = app.model.define('records', attributes, {
    createdAt: 'CreatedAt',
    updatedAt: 'UpdatedAt'
  });
  return Records;
};
