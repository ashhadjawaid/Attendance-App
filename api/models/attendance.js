import mongoose from "mongoose";

const attendanceScheema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    employeeName:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

export default mongoose.model("Attendance", attendanceScheema)