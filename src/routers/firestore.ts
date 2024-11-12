import {Router} from 'express'
import { getCollection } from '../controllers/fireStore';

const router = Router()

router.get('/users',getCollection);

export {router}