import { ManagerMongoDB } from "../../../db/MongoDBManager";
import { Schema } from "mongoose";


const url = process.env.URLMONGODB


const messageSchema = new Schema ({
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
   
});


export class ManagerMessageMongoDB extends ManagerMongoDB {
    constructor(){
        super(url, "messages", messageSchema)
  }
}

