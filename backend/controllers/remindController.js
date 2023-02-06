const Reminder = require("../models/remindModel");

// const createReminder = async (req, res) => {
//   try {
//     const reminder = await Reminder.create(req.body);
//     res.status(200).json(reminder);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

const getReminder = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//.Update
const updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const reminder = await Reminder.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(reminder);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getReminder, updateReminder };
