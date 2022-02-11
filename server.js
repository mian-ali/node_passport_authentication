const  express  = require("express");

const app=express()


//Routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))


const PORT=process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server Running on This Port ${PORT}`);
})