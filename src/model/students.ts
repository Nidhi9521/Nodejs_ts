
import mongoose from "mongoose"; 
const StudentSchma = new mongoose.Schema({
    StudentId: String,
    Name: String,
    Address: String,
    Fees: {
        Amount: Number,
        PaymentDate: Date,
        Status: String
    },
    Result: {
        Hindi: Number,
        Eng: Number,
        Math: Number,
        Total: Number,
        Grade: String
    }

})

const studentmodel = mongoose.model('students',StudentSchma);

export {studentmodel};