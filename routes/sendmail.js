import express from 'express';
const Routes = express.Router();
import {sendmail} from '../congfig/sendmail.js';

Routes.route('/').get(sendmail)

export default Routes