import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import { Schema } from "mongoose";
import { ProductMessageMongoDB } from "./Product.js";

const url = process.env.URLMONGODB





const cartSchema = new Schema ({
    products: [{
        id_prod: {
            type: Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: Number
    }]
})


export class ManagerCartMongoDB extends ManagerMongoDB {
    constructor(){
        super(process.env.MONGODBURL, "cart", cartSchema)
  }
  

  async addProductCart(id, idProd, cant) {
   super.setConnection()
   const carrito = await this.model.findById(id)
   carrito.products.push({ id_prod: idProd, quantity: cant})
   return carrito.save()
}

async getProductsCart() {
    super.setConnection()
    const prods = await this.model.find().populate("products.id_prod")
    return prods
}

async deleteProductCart(id) {
    super.setConnection()
    const carrito = await this.model.findById(id)
    carrito.products.filter(prod => prod.id != id)
    carrito.save()
    return true
}




}

