const { Router } = require ('express');
const router = Router();

const criptos = require ('./sample.json');


router.get('/',(req,res)=>{
    res.json(criptos);
})

module.exports = router;