const express = require("express");
const { registrationService } = require("../services/registrationService");
const { JWT } = require("../utilities/jwt");

const router = new express.Router()

router.get('/:id',(req,res)=>{
    console.log(req.params.id)
    var id = req.params.id
    let result = registrationService.fetch(id,res)
})

router.post('/login',(req,res)=>{
    let result = registrationService.login(req,res)
})

router.post('/create',(req,res)=>{
    console.log(req.body)
    let result = registrationService.create(req,res)
})


module.exports = router