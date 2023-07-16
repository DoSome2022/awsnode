import nodemailer from 'nodemailer';

export const sendmail = (req,res)=>{

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'lhpbtk@gmail.com',
        pass:'lhpbtkoo2050'
    }
});

const mailOption = {
    from:'lhpbtk@gmail.com',
    to:'billy2050@hotmail.com',
    subject:'send Email',
    text:' send the email '
}

transporter.sendMail(mailOption, function(error , info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent' + info.response)
    }
})    




}

