const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobTitleSchema = new Schema({
  jobTitle: String
});

const JobTitle = mongoose.model("Job Title", jobTitleSchema);

module.exports = JobTitle;