import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 8000;
app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});

//Importing Models

import Employee from "./models/employee.js";
import Attendance from "./models/attendance.js";

//Endpoint to Register a Employee

app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create a new Employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();
    res
      .status(201)
      .json({ message: "Employee saved successfully", employee: newEmployee });
  } catch (error) {
    console.log("Error creating Employee", error);
    res.status(500).json({ message: "Failed to add an Employee" });
  }
});

//endpoint to fetch all employee

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching All Employees", error });
  }
});
