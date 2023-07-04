import { getManagerCart } from "../dao/daoManager.js";

const data = await getManagerCart()
const managerCart = new data.ManagerCartMongoDB

export const createCarrito = async (req, res) => {
    try {
        const respuesta = await managerCart.addElements()

        return res.status(200).json(respuesta)
    } catch(error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const getProductsCart = async (req, res) => {

   try {
    const productos = await managerCart.getProductsCart()
    if (productos) {
        return res.status(200).json(productos)
    }
    res.status(200).json({
        message: "Productos no encontrados"
    }) 
}catch (error) {
    res.status(500).json({
        message: error.message
    })

}

}