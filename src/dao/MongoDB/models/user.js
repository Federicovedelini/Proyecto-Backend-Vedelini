import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    date:{
    type: Date,
    default:Date.now
    }  
})

const userModel = model('User', userSchema);

export default userModel
