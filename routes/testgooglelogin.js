import express from 'express';
import passport from 'passport';
const router = express.Router();

import '../congfig/googlepassport.js';



function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }

router.get('/', (req, res) => {
    res.send('<a href="google/auth/google">Authenticate with Google</a>');
  });
  
router.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/google/protected',
      failureRedirect: '/google/auth/google/failure'
    })
  );
  
router.get('/protected', isLoggedIn, (req, res) => {
    res.render('Googleauth/profile',{user:req.user});
    // res.send(`Hello ${req.user.displayName}`)
    console.log(req.user)
  });
  
  router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
      if(err){return next(err);}
          res.redirect('/');
    });

})
router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  
export default router