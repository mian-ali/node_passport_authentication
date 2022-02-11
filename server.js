const  express  = require("express");
const expressLayouts=require('express-ejs-layouts')
const mongoose=require('mongoose')

const app=express()

//DB Config

const db =require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// EJS
app.use(expressLayouts)
app.set('view engine' , 'ejs')

// Express body parser
app.use(express.urlencoded({ extended: true }));

//Routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))


const PORT=process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server Running on This Port ${PORT}`);
})