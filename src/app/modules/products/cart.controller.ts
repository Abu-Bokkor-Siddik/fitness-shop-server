import { query, Request, Response } from "express";
import { cartsService } from "./cart.service";

const cartController =async (req:Request,res:Response)=>{
    try {
        const result = await cartsService.createCartToDB(req.body)

        res.status(200).json({
            success: true,
            message: 'cart created successfully!',
            data: result,
          })
    } catch (error) {
        console.log(error)
    }
}

// get all carts 
const allCartsController = async(req:Request,res:Response)=>{
    try {
        console.log(req.query)
        const result = await cartsService.allCartsToDB(req.query)
        res.status(200).json({
            success: true,
            message: 'Carts fetched successfully!',
            data: result,
          })
    } catch (error) {
       console.log(error) 
    }
}
// single cart 
const singleCart= async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const result = await cartsService.singleCartToDB(id)
        res.status(200).json({
            success: true,
            message: 'Single cart fetched successfully!',
            data: result,
          })
    } catch (error) {
        console.log(error)
    }
}
const deleteCart= async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const result = await cartsService.deleteCartToDB(id)
        res.status(200).json({
            success: true,
            message: 'Delete cart successfully!',
            data: result,
          })
    } catch (error) {
        console.log(error)
    }
}
// update cart 
const updateCart = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const payload= req.body;
        const result = await cartsService.updateCartToDB(id,payload)
        res.status(200).json({
            success: true,
            message: 'update cart successfully!',
            data: result,
          })
    } catch (error) {
        console.log(error)
    }
}
export const cartControllers={
    cartController,
    allCartsController,
    singleCart,
    deleteCart,
    updateCart,
}