import passport from "passport";
import session from 'express-session';



export const IsLoggedIn = (req,res,next)=>{
    req.user ? next() : res.sendStatus(401);
}

export const GoogleLoginPage = (req, res)=>{
    res.send('<a href="/google/auth/google">Authenticate with Google</a>')
}

export const AuthGoogle = (req,res, next)=>{passport.authenticate('google',{scope:['email','profile']})(req,res,next)
}

export const AuthGoogleCallback =(req,res,next)=>{
passport.authenticate('google',{
    successRedirect: '/google/protected',
    failureRedirect: '/google/auth/google/failure'
})(req,res,next)

} 

export const Protected = (req,res)=>{
    res.send(`Hello ${req.user.displayName}`);
}

export const Logout = (req,res)=>{
    req.logout();
    req.session.destroy();
    res.send('Goodbye!')
}

export const AuthGoogleFailure = (req,res)=>{
    res.send('Failed to authenticate')
}