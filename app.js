import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import session from 'express-session';
import passportConfig from './congfig/passport.js';
import cookieParser from "cookie-parser";

const port = 3000 || process.env.PORT;

const app = express();
dotenv.config();

//DB
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log('db is connect')
    } catch (error) {
        console.log(error)
    }
};

//中間件
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: '123',
    resave: 'false',
    saveUninitialized: 'false'
}))
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session())



// 路徑
import SendmailRoutes from "./routes/sendmail.js";
import AuthRoutes from "./routes/auth.js";
import passport from "passport";
import BaseRoutes from './routes/Base.js';
import testgoogleloginRoutes from './routes/testgooglelogin.js';
import testfacebookloginRoutes from './routes/testfacebooklogin.js';
import jwtRoutes from './routes/JsonWebToken.js'




app.use('/',BaseRoutes)
app.use('/google', testgoogleloginRoutes)
app.use('/auth',AuthRoutes);
app.use('/sendmail' , SendmailRoutes);
app.use('/facebook',testfacebookloginRoutes);
app.use('/jwt',jwtRoutes)


// app.get('*',function(req,res,next){
//     res.locals.user = req.user || null;
//     console.log('locals user:' + req.user)
// })

//run server port
app.listen(port,()=>{ //listen 係指 等待用家輸入的指令
    connect() // 去搵返呢個function
    console.log('server is running 3000')
});