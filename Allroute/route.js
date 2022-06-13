import express from 'express';
import { newsrouter} from '../routecontroler/controlerfun.js'

const route=express.Router()

route.get('/newsdetails', newsrouter )

export default route ;