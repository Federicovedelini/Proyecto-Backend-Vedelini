import { Router } from "express";
import { getManagerProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../dao/daoManager.js";

const routerProducto = Router()

routerProducto.get("/", getProducts)
routerProducto.get("/:id", getProduct)
routerProducto.post("/", createProduct)
routerProducto.put("/:id", updateProduct)
routerProducto.delete("/:id", deleteProduct)


export default routerProducto