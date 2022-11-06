const Sequelize = require("sequelize");
const data = require("../connection/connection");
const users = data.define(
  "deacourse",
  {
    nip: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    newPassword: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = users;
