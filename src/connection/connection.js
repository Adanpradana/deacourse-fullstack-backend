const Sequelize = require("sequelize");
const data = new Sequelize("deacourse", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = data;
