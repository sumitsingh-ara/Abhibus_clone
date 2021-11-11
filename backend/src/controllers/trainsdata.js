const express = require('express');

const router = express.Router();
const Trains = require('../models/trainslist.models');

router.get("/:source/:destination",async(req,res)=>{
    try{
        const trains = await Trains.find({$and: [{"source_station": req.params.source}, {"destination": req.params.destination}]}).lean().exec();
    console.log(req.params.source,req.params.destination)
    return res.status(200).send({trains});
    }catch(err) {
        console.log(err.message)
    }
})
router.get("",async(req,res)=>{
    const trains = await Trains.find().lean().exec();
    
    return res.status(200).send({trains});
})
module.exports = router;
