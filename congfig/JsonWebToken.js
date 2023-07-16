import jwt from 'jsonwebtoken';

// export const verifyToken = (req,res,next) =>{
//     const token = 
//     req.body.token || req.query.token || req.headers["x-access-token"] || req.params.token;

//     console.log("config token : "+token)

//     if(!token){
//         return res.status(403).send('驗證要令牌');
//     }
//     try {
//         const decoded = jwt.verify(token, "1234");
//         req.user = decoded;
//     } catch (error) {
//         return res.status(401).send('令牌無效');
//     }
//     return next()
// }

// export const verifylamadev = async (req,res,next)=>{
//     const authHeader = req.headers;
//     console.log(authHeader)
//     if(authHeader) {
//         const token = authHeader.split(" ")[1];
//       await jwt.verify(token , "1234",(err ,user)=>{
//             if(err){
//                 return res.status(403).json("Token is not valid!")
//             }
//             req.user = user;
//             next();
//         })
//     }else{
//         res.status(401).json("no authenticated!")
//     }
// }


// export const verifyTokenAndAuthorization = (req, res, next) => {
//     verifylamadev(req, res, () => {
//       if (req.user.id === req.params.id) {
//         next();
//       } else {
//         res.status(403).json("You are not alowed to do that!");
//       }
//     });
//   };

export const verifyToken = (req , res , next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json("You are not authenticated! ");
    }
    jwt.verify(token,"1234",(err,user)=>{
        if(err)return res.status(403).json("Token is not valid!")
        req.user = user;
        next();
    });

};