const bcrypt = require("bcrypt");
const users = require("../src/model/users");

const bcryptCheck = async (nip, password) => {
  const userData = await users.findOne({
    where: {
      nip,
    },
  });
  const bcryptCompare = await bcrypt.compare(password, userData.password);
  return { userData, bcryptCompare };
};
module.exports = bcryptCheck;
