import express from "express";
const Routes = express.Router();
import {GetRegister ,PostRegister, GetLogin , PostLogin} from "../controllers/auth.js";

Routes.route('/register').get(GetRegister).post(PostRegister);
Routes.route('/login').get(GetLogin).post(PostLogin);

export default Routes