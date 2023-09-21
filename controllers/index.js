import { Sequelize } from "sequelize"
import {viajes,testimonial} from "../models/Viajes.js"


const createMethod = async(req, res)=>{
    console.log("desde controller")
    try {
        const registro = await viajes.viajes.create({
            titulo: "Canada",
            precio: "2300",
            fecha_ida: "2023-04-12",
            fecha_vuelta:" 2023-04-23",
            imagen: "canada",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida augue urna, pharetra hendrerit quam aliquam a. ",
            disponibles: "27",
            slug: "canada"
        })
        res.json({messagge:viajes})
    } catch (error) {
        console.log(error)
    }

}
const findMethod = async(req, res)=>{
    try {
        const user = await viajes.viajes.findAll()
        res.json({user})
    } catch (error) {
        console.log(error)
    }

};

const paginaDetalleViaje = async(req, res)=>{
    const {viaje} = req.params
    try {
        const resultado = await viajes.findOne({
            where:{slug: viaje}
        })
        res.render('viaje', {
            pagina:'Informacion viaje',
            resultado

        }
            
        )
        console.log(resultado.imagen)
        
    } catch (error) {
        console.log(error)
    }
}
 
const paginaInicio = async(req, res)=>{
    const promiseDB = []
    promiseDB.push(viajes.findAll({limit:3}));
    promiseDB.push(testimonial.findAll({limit:3}))
    try {
        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
            pagina: "Inicio",
            clase: 'home',
            viaje: resultado[0],
            testimonio: resultado[1]
        })
        
    } catch (error) {
        console.log(error)
        
    }
    
    
}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros"
    })

};

const paginaTestimoniales = async(req, res)=>{
    try {
        const testimonio = await testimonial.findAll()
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimonio
        })
        
    } catch (error) {
        
    }
    
};

const paginaViajes = async(req, res)=>{
    try {
        const viaje = await viajes.findAll()
        res.render('viajes', {
            pagina: "Viajes",
            viaje
        })
    } catch (error) {
        
    }
   
}

export{
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    createMethod,
    findMethod,
    paginaDetalleViaje
    

}