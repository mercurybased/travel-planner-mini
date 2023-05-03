const express = require('express');
const router = express.Router();
const {Travelers, Location, Trip } = require('../models');

router.get("/api/locations", (req,res)=>{
    Location.findAll().then(locations=>{
        res.json(locations)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

router.get("/api/location/:id", (req,res)=>{
    Location.findByPK({where:{id:req.params.id}}).then(locations=>{
        if (locations===0){
            return res.status(404).json({msg:"no location"})
        }
        res.json(location)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

router.post("/api/locations", (req,res)=>{
    Location.create({name:req.body.name}).then(newLocation=>{
        res.json(newLocation)
    }).catch(err=>{
        console.log(err);
        res.json(500).json({msg:"no location",err})
    })
})
module.exports=router