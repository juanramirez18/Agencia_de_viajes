import { DataTypes} from "sequelize";
import  {db}  from "../config/bd.js";



export const  viajes = db.define('viaje', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    titulo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.STRING
    },
    fecha_ida:{
        type: DataTypes.DATE
    },
    fecha_vuelta:{
        type: DataTypes.DATE
    },
    imagen:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    disponibles:{
        type: DataTypes.STRING
    },
    slug:{
        type: DataTypes.STRING
    },


})

export const testimonial = db.define('testimonial',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    mensaje:{
        type: DataTypes.STRING
    }

}



)

export default {
    viajes,
    testimonial
}

