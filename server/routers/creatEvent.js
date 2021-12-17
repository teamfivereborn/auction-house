var express = require('express');
var {event} = require('../database-mongodb/schemas.js');

var router = express.Router();

router.route('/').post((req,res)=>{
    console.log("////////8888",req.body)
    
}

)
  



module.exports = router;
