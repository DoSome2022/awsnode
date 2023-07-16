import passport from "passport"; 
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

const G_Client_ID ='442549881972-13r3dd9qgruhdt4sj0sddqg7gbq2h777.apps.googleusercontent.com'
const G_Client_Secret = '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'
const Google_Oauth_RedirectUrl = 'http://localhost:3000/google/auth/google/callback'
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