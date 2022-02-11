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

// Register 
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
  
    //'Please enter all fields'
     
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }

  //Passwords do not match
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
    
  ///Password must be at least 6 characters
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  });


module.exports =router;
