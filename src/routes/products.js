import { ManagerMongoDB } from "../db/MongoDBManager.js"
import { Schema } from "mongoose";


const url = process.env.URLMONGODB


const productSchema = new Schema ({
    nombre: String,
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