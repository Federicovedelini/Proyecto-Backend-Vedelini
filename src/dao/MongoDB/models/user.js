import mongoose, { Schema, model } from "mongoose";
import { ManagerMongoDB } from "../../../db/mongoDBManager";

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

export class ManagerUserMongoDB extends ManagerMongoDB {
    constructor() {
        super(process.env.URLMONGODB, "users", userSchema)
    }

    async getElementByIdEmail(email) {
        super.setConnection()
        try {
            return await this.model.findOne({ email: email})
        }catch (error) {
            return error
        }
    }

    
}

const userModel = model('User', userSchema);

export default userModel
