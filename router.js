var express=require('express')
var router=express.Router()

router.get('/k',function(req,res,next){
    res.send("hello")
})
