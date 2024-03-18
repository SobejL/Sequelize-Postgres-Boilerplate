const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config()

  const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

module.exports =  sequelize;
