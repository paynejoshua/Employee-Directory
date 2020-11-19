const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeecrm");

const departmentSeed = [
  {
    department: "Human Resources"
  },
  {
    department: "Information Technology"
  },
  {
    department: "Data Structure"
  },
  {
    department: "Cloud Services"
  },
  
];

db.Department.remove({})
  .then(() => db.Department.collection.insertMany(departmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
