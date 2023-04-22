import mongoose from "mongoose";

export class ManagerMongoDB{
    constructor(url, collection, schema){
        this.url = url 
        this.collection = collection
        this.schema = new mongoose.Schema(schema)
        this.model = mongoose.model(this.collection, this.schema)
    }
}

