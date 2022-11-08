const data = require("../connection/connection");
const users = require("../model/users");
const bcrypt = require("bcrypt");
const bcryptCheck = require("../../utils/bcrypt");
const getUsers = async (req, res) => {
  try {
    const result = await users.findAll();
    res.status(200).json({ message: "success get all data", data: result });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createUsers = async (req, res) => {
  const { nip, user_name, email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 12);
  try {
    const result = await users.create({
      nip,
      user_name,
      email,
      password: encryptPassword,
    });
    res.status(200).json({ message: "success create users", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const editUsers = async (req, res) => {
  const { nip, user_name, email, password, newPassword } = req.body;
  const compare = await bcryptCheck(nip, password);
  const encryptPassword = await bcrypt.hash(newPassword, 12);
  if (compare) {
    const user = await users.update(
      {
        user_name,
        email,
        password: encryptPassword,
      },
      {
        where: {
          nip,
        },
      }
    );
    res.json({ message: "success update data!" });
  } else {
    res.status(400).json({ message: "wrong password!" });
  }
};

const login = async (req, res) => {
  const { nip, password } = req.body;
  try {
    const compare = await bcryptCheck(nip, password);
    compare.bcryptCompare ? res.status(200).json({ message: "login success" }) : res.status(400).json({ message: "credential error" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

data.sync();
module.exports = {
  getUsers,
  createUsers,
  editUsers,
  login,
};
