import passport from "passport"; 
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from "dotenv";
dotenv.config()

const G_Client_ID =process.env.G_Client_ID
const G_Client_Secret =process.env.G_Client_Secret
const Google_Oauth_RedirectUrl =process.env.Google_Oauth_RedirectUrl
const Server_Endpoint = 'http://localhost:3000'


passport.use(new GoogleStrategy({
    clientID: G_Client_ID,
    clientSecret: G_Client_Secret,
    callbackURL: Google_Oauth_RedirectUrl,
    passReqToCallback: true,
},
function(request, accessToken, refreshToken , profile , done){
    return done(null , profile)
}))

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });