const mongoose = require("mongoose");

const reminderSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;
