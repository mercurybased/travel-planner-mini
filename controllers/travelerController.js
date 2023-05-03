const express = require('express');
const router = express.Router();
const {Travelers, Location, Trip } = require('../models');

router.get("/api/travelers", (req,res)=>{
    Travelers.findAll().then(travelers=>{
        res.json(travelers)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

router.get("/api/travelers/:id", (req,res)=>{
    Travelers.findByPK({where:{id:req.params.id}}).then(travelers=>{
        if (travelers===0){
            return res.status(404).json({msg:"no travelers"})
        }
        res.json(travelers)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

module.exports=router