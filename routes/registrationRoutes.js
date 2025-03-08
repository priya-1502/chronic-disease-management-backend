const express = require("express");
const { registrationService } = require("../services/registrationService");

const router = new express.Router()

router.get('/login',(req,res)=>{
    var bodyData = req.body
})

router.get('/create',(req,res)=>{
    console.log(req.body)
    registrationService.create(req)
})


module.exports = router