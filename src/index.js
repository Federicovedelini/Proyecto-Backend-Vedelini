import 'dotenv/config'
import express from 'express'
import {Socket as socket} from 'socket.io'
import { getManagerMessages }  from './dao/daoManager.js'
import { Server } from 'socket.io'
import mongoose from 'mongoose';
import orderModel from './models/order.js'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import session from 'express-session'


const app = express()

const manager = await getManagerMessages();
const managerMessage = new manager.ManagerMessageMongoDB()



//PORT


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: true,
   
}))




//COOKIES
app.get('/setCookie', (req,res) => {
   res.cookie('Cookie 1', "Creando primer cookieee", 
   { maxAge:50000, signed: true }).send('Cookie2')
})

app.get('/getCookie', (req,res) => {
   res.send(req.signedCookies)
})





app.set("port", process .env.PORT || 8080 )

const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))
const io = new Server(server)



io.on("connection",  (socket) => {
   socket.on("message", (info) => {
      managerMessage.addElements([info]).then(() => {
         managerMessage.getElements().then((mensajes) => {
            console.log(mensajes)
            socket.emit("allMessages", mensajes)
         })
        
      })
   
   })

})


//PRODUCTOS

/*const main = async () => {
   await mongoose.connect("mongodb+srv://Fede:42906980@cluster0.oqovw7a.mongodb.net/?retryWrites=true&w=majority")

   const resultados = await orderModel.paginate({category: ""}, {size: "medium"}, {limit: 4, page: 1 })
   console.log(resultados)

   /*const resultados = await orderModel.aggregate([
    {
       $match: {size: "medium"}
    },
    {
       $group: {_id: "$name", totalQuantity: {$sum: "$quantity"} , totalPrice: {$sum:"$price" } }
    },
    {
       $sort: {totalQuantity: -1}
    },
    {
      $group: {_id: 1, orders: {$push: "$$ROOT"} }
    },
    {
     $project: {
      "_id": 0,
      orders: "$orders"
     }
    },
   {
      $merge: {
         into: "reports"
      }
   }
])
 
   console.log(resultados)
 
 
   /*await orderModel.insertMany([
    { name:"Mercurial", size: "small",price:50.000, quantity:2 },
    { name:"Adidas Gloro", size: "medium",price:26.000, quantity:10000 },
    { name:"Hypervenom", size: "XL",price:38000, quantity:3 },
    { name:"puma borussia", size: "medium",price:90000, quantity:2 }
   
 
 
   
 }
 
 
 main()

 */

