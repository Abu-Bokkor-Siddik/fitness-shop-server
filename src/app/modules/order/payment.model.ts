import { model, Schema } from "mongoose";
import { Cartes, PriceTypes } from "./payment.interface";


const cartSchema = new Schema<Cartes>(
  {
    name: {
      type: String,
      required: true,
     
    },
    quantity:{
      type: Number,
    },
    _id:{
      type: String,
      required: true,
    },
   
    description: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    

    stock: {
      quantity: {
        type: Number,
        required: true,
      },
      isStock: {
        type: Boolean,
        required: true,
      },
    },
    cart:{
      type:String,
    },
    
  },
);
const paymentSchema = new Schema<PriceTypes>(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        transactionId:{
          type:String,
          
        },
       phoneNumber:{
            type:String,
            required:true
        },
        
        address:{
            type:String,
            required:true
        },
        carts:{
          type:[cartSchema]
        }
    },
    {
      timestamps: true,
    },
  );
  
  export const PaymentModel = model<PriceTypes>('payments',paymentSchema );