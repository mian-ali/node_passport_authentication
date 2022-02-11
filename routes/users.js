const express = require('express');
const router= express.Router();

// Login Page Route
router.get('/login', (req,res)=>{
    res.send("Login Page")
})

// Register Page Route
router.get('/register', (req,res)=>{
    res.send("Register Page")
})

module.exports =router;
