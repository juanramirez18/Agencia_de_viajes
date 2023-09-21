import { Sequelize } from "sequelize";
import { viajes, testimonial} from "../models/Viajes.js";

const guardarTestimonial = async(req, res)=>{
    const {nombre, correo, mensaje} = req.body
    const errores = []
    if(nombre.trim() == ""){
        errores.push({mensaje: "el nombre esta vacio"})
    }
    if(correo.trim() == ""){
        errores.push({mensaje: "el correo esta vacio"})
    }
    if(mensaje.trim() == ""){
        errores.push({mensaje: "el mensaje esta vacio"})
    }

    if(errores.length > 0){
        const testimonio = await testimonial.findAll()
        res.render("testimoniales",{
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimonio
        })
    }else{
        try {
            const testimonio = await testimonial.create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                mensaje: req.body.mensaje
            })
            res.redirect('/testimoniales')
            console.log("yeaahh mann")
        } catch (error) {
            console.log(error)
            
        }

    }
    
    console.log(errores)
    
  

}




export{
    guardarTestimonial,
    


}