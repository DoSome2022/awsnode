import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    first_name :{type: String},
    last_name :{type: String},
    email: {type: String},
    password: {type: String},
    token:{type: String}
})

const JWTDB = mongoose.model('JWTauth',AuthSchema)

export default JWTDB