const express = require('express');

const router = express.Router();
const Trains = require('../models/trainslist.models');

router.get("",async(req,res)=>{
    const trains = await Trains.find().lean().exec();

    return res.status(200).send({trains});
})
module.exports = router;