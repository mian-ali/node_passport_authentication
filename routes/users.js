const express = require('express');
const router= express.Router();

// Login Page Route
router.get('/login', (req,res)=>{
    res.render("login")
})

// Register Page Route
router.get('/register', (req,res)=>{
    res.render("register")
})

module.exports =router;
