const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  department: String
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;