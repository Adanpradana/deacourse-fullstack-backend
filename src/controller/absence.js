const absence = require("../model/absence");

const getAbsence = async (req, res) => {
  try {
    const result = await absence.findAll();
    res.status(200).json({ message: "success get all data", data: result });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const clockIn = async (req, res) => {
  const { users_nip } = req.body;
  try {
    const result = await absence.create({
      users_nip,
      status: "in",
    });
    res.status(200).json({ message: "success create users", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const clockOut = async (req, res) => {
  const { users_nip } = req.body;
  try {
    const result = await absence.create({
      users_nip,
      status: "out",
    });
    res.status(200).json({ message: "success create users", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAbsence,
  clockIn,
  clockOut,
};
