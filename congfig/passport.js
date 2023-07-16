import passport from "passport"; 
import { Strategy as LocalStrategy} from "passport-local";
import Auth from '../models/Auth.js';
import bcrypt from 'bcrypt';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
// import { Strategy as FacebookStrategy } from 'passport-facebook';


// const G_Client_ID ='442549881972-13r3dd9qgruhdt4sj0sddqg7gbq2h777.apps.googleusercontent.com'
// const G_Client_Secret = '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'
// const Google_Oauth_RedirectUrl = 'http://localhost:3000/google/auth/google/callback'
// const Server_Endpoint = 'http://localhost:3000'

// const F_Client_ID = '1300710187161347'
// const F_Client_Secret = '2c8eae46757055ad50d96087270085fc'
// const FaceBook_Oauth_RedirectUrl = 'http://localhost:3000/auth/facebook/callback'


// -----------------------------passport_login-----------------------------------
export default  (passport)=>{
passport.use(new LocalStrategy(
    {usernameField:'username',             passwordField:'password'},
    function(username , password ,done){
        Auth.findOne({username:username}).then((user)=>{
            if(!user) {
                return done(null, false,console.log('no user Found'))
            }
            bcrypt.compare(password, user.password , (err , isMatch)=>{
                if (err) throw err;
                if (isMatch) {
                    return done(null, user)
                } else {
                    return done(null , false , console.log('no password'))
                }
            })
        })
    }
))
//-------------------------------passport_Google_login------------------------------------------
// passport.use(new GoogleStrategy({
//     clientID: G_Client_ID,
//     clientSecret: G_Client_Secret,
//     callbackURL: Google_Oauth_RedirectUrl,
//     passReqToCallback: true,
// },
// function(request, accessToken, refreshToken , profile , done){
//     return done(null , profile)
// }))
 
//-------------------------passport_Facebook_login---------------------------------------

// passport.use(new FacebookStrategy({
//     clientID: F_Client_ID,
//     clientSecret: F_Client_Secret,
//     callbackURL: FaceBook_Oauth_RedirectUrl
// },function(profile ,done){
//     return done(null , profile)
// }
// ))

passport.serializeUser(function(user , done){
    done(null , user.id)
})
passport.deserializeUser(function(id,done){
    Auth.findById(id,function(err , user){
        done(err,user)
    })
})
}

