const mongoose = require("mongoose");
const db = require("../models")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeecrm");

const employeeSeed = [
  {
    name: "John Smith",
    jobTitle: "IT Specialist",
    email: "johns@thecompany.com",
    salary: 40000,
    managerID: 1,
    departmentID: 2,
    date: new Date(Date.now())
  },
  {
    name: "Davy Jones",
    jobTitle: "HR Representative",
    email: "davyj@thecompany.com",
    salary: 30000,
    managerID: 1,
    departmentID: 2,
    date: new Date(Date.now())
  },
  {
    name: "Buck Winter",
    jobTitle: "IT Specialist",
    email: "buckw@thecompany.com",
    salary: 35000,
    managerID: 1,
    departmentID: 2,
    date: new Date(Date.now())
  },
  {
    name: "Carl Storm",
    jobTitle: "Data Analyst",
    email: "carls@thecompany.com",
    salary: 50000,
    managerID: 1,
    departmentID: 3,
    date: new Date(Date.now())
  },
  {
    name: "Tom Benny",
    jobTitle: "Cloud Data Analyst",
    email: "tomb@thecompany.com",
    salary: 45000,
    managerID: 1,
    departmentID: 4,
    date: new Date(Date.now())
  },
  
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
