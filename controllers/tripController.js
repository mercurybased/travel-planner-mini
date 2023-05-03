const express = require('express');
const router = express.Router();
const {Travelers, Location, Trip } = require('../models');

router.post("/", (req,res)=>{
    Trip.create({
        where: {
            trip_budget: req.body.trip_budget,
            traveler_amount: req.body.traveler_amount
        }
    }).then(newTrip=>{
        res.json(newTrip)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

router.delete("/:id", (req,res)=>{
    Trip.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deleteTrip) =>{
        res.json(deleteTrip)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

module.exports=Trip