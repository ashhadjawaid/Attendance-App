import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type: String,
        required: true,
        unique: true
    },
    employeeName:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    joiningDate:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    activeEmployee:{
        type: Boolean,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    address: {
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Employee", employeeSchema)