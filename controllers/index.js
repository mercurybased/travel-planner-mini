const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
const travelerRoutes = require("./travelerController");
const tripRoutes = require("./tripController");

router.get("/",(req,res)=>{
    res.send("this is the homepage!")
})

router.use("/api/locations",locationRoutes)
router.use("/api/travelers",travelerRoutes)
router.use("/api/trips",tripRoutes)

module.exports = router;