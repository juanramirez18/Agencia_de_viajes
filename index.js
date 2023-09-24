// const express = require("express");
import  express  from "express";
import router from "./routes/index.js";
import { dbConnection, db } from "./config/bd.js";
import {viajes, testimonial} from "./models/Viajes.js";
import  Sequelize  from "sequelize";



const app = express();

//Conectar bd

// db.authenticate().then(()=>{console.log("conectado a la bd")}).catch(error => console.log(error))
dbConnection()


//  sync model db
const dataBase = async()=>{
    try {
        // await viajes.viajes.sync()
        await testimonial.testimonial.sync()
    } catch (error) {
        console.log(error)
    }
}
    
dataBase()


//Definir el puerto
const port = process.env.port || 4000

//Habilitar pug
app.set('view engine', 'pug')

app.use((req, res, next)=>{
    const year = new Date;
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes"
    next()

})
//Habilitar dody parser para leer datos del formulario

app.use(express.urlencoded({extended:true}))
app.use("/", router)

app.use(express.static('public'))




app.listen(port, () =>{
    console.log(`El servidor esta online en el puerto  ${port}`)

})
