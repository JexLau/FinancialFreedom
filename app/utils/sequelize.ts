import { Sequelize } from 'sequelize-typescript';
import path from "path";

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'finance',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  models: [path.resolve(__dirname, '../model')],
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    underscored: false,
  },
  dialectOptions: {
    dateStrings: true,
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
  timezone: '+00:00',
  logging: false,
})
