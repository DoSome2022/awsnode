import { Strategy as FacebookStrategy } from 'passport-facebook';
import passport from "passport"; 

const F_Client_ID ='1300710187161347'
const F_Client_Secret ='2c8eae46757055ad50d96087270085fc'
const FaceBook_Oauth_RedirectUrl ='http://localhost:3000/facebook/auth/facebook/callback'


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