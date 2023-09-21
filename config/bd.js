import Sequelize from "sequelize"
import dotenv from "dotenv/config"

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

const dbConnection = async()=>{
    try {
        await db.authenticate()
        console.log("connection stablish with success")
    } catch (error) {
        console.error("mensaje de error",error)
        
    }
}

export {
    db,
    dbConnection
}

