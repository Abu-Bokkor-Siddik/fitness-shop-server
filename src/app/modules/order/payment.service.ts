import { PriceType } from './payment.interface';
import { PaymentModel } from "./payment.model";

const createPayment = async (price:PriceType) => {
    console.log(price)
//     const result = await PaymentModel.create(price);
// //   const result ='hello'
//     return result;

  };


  export const paymentService={
    createPayment,
}