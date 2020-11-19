const mongoose = require("mongoose");
const db = require("../models")



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeecrm");

const jobTitleSeed = [
  {
    jobTitle: "HR Representative"
  },
  {
    jobTitle: "IT Specialist"
  },
  {
    jobTitle: "Data Analyst"
  },
  {
    jobTitle: "Cloud Data Analyst"
  },
  
  
];

db.JobTitle.remove({})
  .then(() => db.JobTitle.collection.insertMany(jobTitleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
