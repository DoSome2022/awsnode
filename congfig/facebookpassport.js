import { Strategy as FacebookStrategy } from 'passport-facebook';
import passport from "passport"; 
import dotenv from "dotenv";
dotenv.config()

const F_Client_ID =process.env.F_Client_ID
const F_Client_Secret =process.env.F_Client_Secret
const FaceBook_Oauth_RedirectUrl =process.env.FaceBook_Oauth_RedirectUrl


//-------------------------passport_Facebook_login---------------------------------------

passport.use(new FacebookStrategy({
    clientID: F_Client_ID,
    clientSecret: F_Client_Secret,
    callbackURL: FaceBook_Oauth_RedirectUrl,
    profileFields:['email','name']
},function(accessToken,refreshToken,profile ,done){
    const {email , first_name , last_name} = profile._json ;
    const userDate = {
      email,
      firstName:first_name,
      lastName:last_name,
    }
    //can save to db
    //const saveDate = UserDate.save()
  done(null , profile)
}
))


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
  });