import express from "express";
import {guardarTestimonial} from "../controllers/testimonialController.js"
import {paginaDetalleViaje, findMethod , createMethod, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from "../controllers/index.js";
const router = express.Router();


router.post("/", createMethod)
router.get("/",paginaInicio )

router.get("/viajes", paginaViajes)
router.get("/viajes/:viaje", paginaDetalleViaje)

router.post("/testimoniales",guardarTestimonial)
router.get("/testimoniales", paginaTestimoniales);

router.get("/nosotros", paginaNosotros )

router.get("/contacto", (req, res) => {
    res.json({
        id: 3
    })

});



export default router;