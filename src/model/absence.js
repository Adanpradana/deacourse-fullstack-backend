const Sequelize = require("sequelize");
const data = require("../connection/connection");
const absence = data.define(
  "absence",
  {
    users_nip: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["in", "out"],
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = absence;
