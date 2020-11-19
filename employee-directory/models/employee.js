const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  jobTitle: String,
  email: String,
  salary: Number,
  managerID: Number,
  departmentID: Number,
  dateHired: { type: Date, default: Date.now }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;