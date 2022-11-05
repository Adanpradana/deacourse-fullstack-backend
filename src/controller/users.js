const users = require("../model/users");

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
  const { id, user_name, email } = req.body;
  try {
    const result = await users.create({
      id,
      user_name,
      email,
    });
    res.status(200).json({ message: "success create users", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const editUsers = async (req, res) => {
  const { id, user_name, email } = req.body;
  try {
    const result = await users.update(
      {
        id,
        user_name,
        email,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ message: "success create users", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUsers,
  editUsers,
};
