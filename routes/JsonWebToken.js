import express from 'express';
const Routes = express.Router();
import {Getlogin,Getregister,PostRegister,Postlogin ,GetPage , LogOut} from '../controllers/JsonWebToken.js'
import {verifyToken } from '../congfig/JsonWebToken.js'

Routes.route('/register').get(Getregister).post(PostRegister)

Routes.route('/login').get(Getlogin).post(Postlogin)

Routes.get('/:id',verifyToken,GetPage)

Routes.post('/logout',LogOut)

export default Routes