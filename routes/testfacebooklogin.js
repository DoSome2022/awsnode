import express from 'express';
import passport from 'passport';
const router = express.Router();

import '../congfig/facebookpassport.js';


function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
    return next()
    res.redirect('/facebook')
}

router.get('/',(req,res)=>{
    res.render('facebookauth/index')
})

router.get('/profile',isLoggedIn,function(req,res){
    res.render('facebookauth/profile',{
      user:req.user
    });
    // res.send(`Hello ${req.user._json.last_name}`)
    // console.log(req.user)
})

router.get('/error',isLoggedIn,(req,res)=>{
    res.render('facebookauth/error')
})



router.get('/auth/facebook',
  passport.authenticate('facebook',{scope: ['email']}
  
  ));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: 'facebook/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/facebook/profile');
  });

router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
      if(err){return next(err);}
          res.redirect('/');
    });

})

export default router