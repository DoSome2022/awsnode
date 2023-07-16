import Auth from "../models/Auth.js";
import passport from "passport";
import bcrypt from "bcrypt";

export const GetRegister = (req,res)=>{
    //res.send("register")
    res.render('Auth/register')
}

export const PostRegister = async (req,res)=>{ //<-- 
    const saltRounds = 10;
    const {
        username ,
        name ,
        email,
        phone,
        address,
        password
        } = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password , salt);
        const newUser = await new Auth({
            username : username,
            name : name,
            email : email,
            phone :phone,
            address : address,
            password : hash,
        })

    const saveUser = await newUser.save()
    console.log(saveUser)

    res.redirect('/auth/login')
}

export const GetLogin = (req,res)=>{
    //res.send("login")
    res.render('Auth/login')
}

export const PostLogin = passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/user/login'
})