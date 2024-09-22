import { Request, Response } from "express";
import Stripe from "stripe";
const stripe= new Stripe('sk_test_51OENAOCd9xEdxNs2wI7VYV270dNQ5tWHW7WmV97HBDwLtGpW9qcZlawBJCgudw7IXEQHECum5eKw1iPjDfiqqCFE0073q5KJFI')
import { paymentService } from "./payment.service"

const paymentController =async (req:Request,res:Response)=>{
    // const {price} =req.body
    // console.log(price)
    try {
        const result = await paymentService.createPayment(req.body)

        // res.status(200).json({
        //     success: true,
        //     message: 'payment',
        //     data: result,
        //   })


        // const amount =parseInt(price * 100)
        // const paymentIntent = await stripe.paymentIntents.create({
        //   amount: amount,
        //   currency: "usd",
        //    payment_method_types:['card']
        // });
        // res.send({
        //   clientSecret: paymentIntent.client_secret,
        // });
        // console.log(req.body.carts)

        res.status(200).json({
          success: true,
          message: 'payment created successfully!',
          data: result,
        })
    } catch (error) {
        console.log(error)
    }
}
export const paymentControllers={
paymentController
}