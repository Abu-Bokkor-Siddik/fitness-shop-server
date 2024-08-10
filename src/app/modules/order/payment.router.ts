import express from 'express'
import { paymentControllers } from './payment.controller';

const router = express.Router()
router.post('/payments',paymentControllers.paymentController)

export const paymentRouter=router;