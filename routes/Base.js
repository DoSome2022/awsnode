import express from 'express';
const Routes = express.Router();
import {GetHomePage}  from '../controllers/Base.js'

Routes.route('/').get(GetHomePage)

export default Routes