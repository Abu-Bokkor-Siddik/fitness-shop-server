import express from 'express'
import { cartControllers } from './cart.controller'
const router = express.Router()
router.post('/cart',cartControllers.cartController)
router.get('/cart',cartControllers.allCartsController)
router.get('/cart/:id',cartControllers.singleCart)
router.delete('/cart/:id',cartControllers.deleteCart)
router.put('/cart/:id',cartControllers.updateCart)
// todo
router.get('/payCart',cartControllers.paymentCart)
export const cartRouter=router;