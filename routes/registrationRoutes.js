const express = require("express");
const { registrationService } = require("../services/registrationService");

const router = new express.Router()

router.get('/login',(req,res)=>{
    var {username,password} = req.body
    let result = registrationService.login(username,password,res)
})

router.post('/create',(req,res)=>{
    console.log(req.body)
    let result = registrationService.create(req,res)
})

router.get('/user',(req,res)=>{
    var {id} = req.params.id
    let result = registrationService.fetch(id,res)
})

module.exports = router