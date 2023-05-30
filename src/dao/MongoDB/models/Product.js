import { ManagerMongoDB } from "../../../db/MongoDBManage.js";
import { Schema } from "mongoose";


const url = ""

const messageSchema = new Schema ({
    name: String,
    marca: String,
    precio: Number,
    stock: Number,
    email: {
        type: String,
        unique: true
    },
    message: String
})


export class ManagerMessageMongoDB extends ManagerMongoDB {
    constructor(){
        super(url, "messages", messageSchema)
  }

}
