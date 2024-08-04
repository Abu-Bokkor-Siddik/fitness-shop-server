import { Schema, model } from 'mongoose';
import { Carts } from './cart.interface';

const cartSchema = new Schema<Carts>(
  {
    name: {
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
  },
  {
    timestamps: true,
  },
);

export const CartModel = model<Carts>('carts', cartSchema);
