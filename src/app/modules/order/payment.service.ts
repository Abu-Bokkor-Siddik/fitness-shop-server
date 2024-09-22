/* eslint-disable no-unsafe-optional-chaining */

import { CartModel } from "../products/cart.model";
import { PriceTypes } from "./payment.interface";
import { PaymentModel } from "./payment.model";

const createPayment = async (payload:PriceTypes) => {
    console.log(payload?.carts)
    try {
      for (let index = 0; index < payload?.carts.length; index++) {
        const {quantity,stock,_id} = payload?.carts[index];
        // console.log(id)
        // console.log(quantity,'here', stock?.quantity)
        const realData= stock?.quantity-quantity;
        // console.log('decrement data',realData)

        const matchData = await CartModel.updateOne({_id:_id},{
          $set:{'stock.quantity':realData}
        })
        console.log(matchData,'data')
      }
    } catch (error) {
      console.log(error)
    }


    const result = await PaymentModel.create(payload);
    console.log(result,'service create')
//   const result ='hello'
    return result;

  };


  export const paymentService={
    createPayment,
}