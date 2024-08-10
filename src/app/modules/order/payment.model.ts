import { model, Schema } from "mongoose";
import { PriceType } from "./payment.interface";

const paymentSchema = new Schema<PriceType>(
    {
        price:{
            type:Number,
            required:true
        }
    },
    {
      timestamps: true,
    },
  );
  
  export const PaymentModel = model<PriceType>('payment',paymentSchema );