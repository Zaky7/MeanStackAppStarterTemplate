const express     = require('express');
const router      = express.Router();
const User        = require('../models/user');
const passport    = require('passport');
const jwt         = require('jsonwebtoken');
const config      = require('../config/database');

/**************************************** Register **************************************/
router.post('/register', (req,res,next) => {
      console.log('Register Request',req.body);
      let newUser = new User({
      	  name:  req.body.name,
      	  email: req.body.email,
      	  username: req.body.username,
      	  password: req.body.password
      });

      User.addUser(newUser, (err) => {
      	  if(err){
      	  	  res.json({success:false, msg:'Failed to create User'});
      	  } else {
      	  	  res.json({success:true, msg:'User created Successfuly'});
      	  }

      });
});

/**************************************** Authenticate **************************************/

router.post('/authenticate', (req,res,next) => {
        const username = req.body.username;
        const password = req.body.password;

        User.getUserByUsername(username, (err,user) => {
             if(err){
                throw err;
             }

             if(!user){
                return res.json({success:false, msg:'User not found'});
             }

             User.comparePassword(password, user.password, (err, isMatch) => {
                   if(err) throw err;
                   if(isMatch){
                          const token = jwt.sign(user.toJSON(),config.secret,{
                                expiresIn:604800 // 1 week
                          });
                       
                         //(MAKE SURE TO PUT A SPACE AFTER "Bearer"!!!!)
                         res.json({
                             success: true,
                             token: 'Bearer '+ token,
                             user : {
                                id: user._id,
                                name: user.name,
                                username: user.username,
                                email : user.email
                             }
                         });
                 } else {
                    return res.json({success:false, msg:'Wrong password'});
                 }   
             });
        });
});


/**************************************** Profile **************************************/

//Second parameter is for protecting the route
//<-- passport.authenticate('jwt',{session:false}) -->

router.get('/profile', passport.authenticate('jwt',{session:false}) ,(req,res,next) => {
       res.json({user:req.user});

});


/**************************************** Validate **************************************/
router.get('/validate', (req,res,next) => {
       res.send('VALIDATE');
});



/**************************************** Exporting the route **************************************/
module.exports = router;