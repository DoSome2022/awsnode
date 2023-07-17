import JWTDB from '../models/JsonWebToken.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Getlogin = (req,res)=>{
    res.render('JWT/login')
}

export const Getregister = (req,res)=>{
    res.render('JWT/register')
}

export const Postlogin = async (req,res)=>{
    console.log('login : ', req.body)
    try {
        const {email , password} = req.body;
        const user = await JWTDB.findOne({email});
        console.log('1')
        if(user&&(await bcrypt.compareSync(password , user.password)))
        console.log('2')
        if(user){
            console.log('3')
        const token = jwt.sign({id: user._id},"1234")
        const {password , ...others} = user._doc;
            res.cookie("access_token",token,{httpOnly: true})
            console.log('details :', {...others})
      return  res.redirect(`/jwt/${user._id}`)
        }
        res.status(400).json('token has wrong')
    } catch (error) {
        res.status(400).json(error)
    }

}

export const PostRegister = async (req,res)=>{
    const {first_name , last_name , email , password} = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password , salt);
    
    console.log('register : ',req.body)
    
    const newJWTuser = new JWTDB({
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:hash
    })
    try {
    const saveJWTuser = newJWTuser.save();
    console.log('save : ',saveJWTuser)
    res.redirect('/jwt/login')
    } catch (error) {
    res.render('JWT/register')
    }
}

export const GetPage = async(req,res)=>{
    const users = await JWTDB.findById(req.params.id)
    res.render('JWT/jwtindex',{user:users})
}

export const LogOut = (req,res)=>{
    const token = "";
    res.cookie("access_token",token,{httpOnly: true})
     res.redirect('/')
    //res.send('done')
}