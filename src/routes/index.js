const {Router} = require('express')
const router = Router();

router.get ('/test' ,(req,res)=>{
    const data ={
        "Nombre":"Johan",
        "Apellido" : "Salazar"
    }
    res.json(data);
} )


module.exports = router;