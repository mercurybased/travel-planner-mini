const express = require('express');
const router = express.Router();
const {Travelers, Location, Trip } = require('../models');

router.get("/", (req,res)=>{
    Location.findAll().then(locations=>{
        res.json(locations)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error",err})
    })
})

router.get("/:id", (req,res)=>{
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

router.post("/", (req,res)=>{
    Location.create({name:req.body.name}).then(newLocation=>{
        res.json(newLocation)
    }).catch(err=>{
        console.log(err);
        res.json(500).json({msg:"no location",err})
    })
})

router.delete("/:id", (req,res)=>{
    Location.destroy({
        where: {
            id:req.params.id
        }
    })
    .then((deleteLocation)=>{
        res.json(deleteLocation)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({msg:"could not delete",err})
    })
})


module.exports=router