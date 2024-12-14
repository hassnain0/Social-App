const express=require('express');
const {signUp}=require('../controller/controller');
const {connectDb}=require('../connection');
const router=express.Router();


connectDb("mongodb://127.0.0.1:27017/socialApp").then(()=>{console.log("Database is connected")})
router.post('/',signUp);

module.exports=router;