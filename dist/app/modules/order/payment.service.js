"use strict";
/* eslint-disable no-unsafe-optional-chaining */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const cart_model_1 = require("../products/cart.model");
const payment_model_1 = require("./payment.model");
const createPayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload === null || payload === void 0 ? void 0 : payload.carts);
    try {
        for (let index = 0; index < (payload === null || payload === void 0 ? void 0 : payload.carts.length); index++) {
            const { quantity, stock, _id } = payload === null || payload === void 0 ? void 0 : payload.carts[index];
            // console.log(id)
            // console.log(quantity,'here', stock?.quantity)
            const realData = (stock === null || stock === void 0 ? void 0 : stock.quantity) - quantity;
            // console.log('decrement data',realData)
            const matchData = yield cart_model_1.CartModel.updateOne({ _id: _id }, {
                $set: { 'stock.quantity': realData }
            });
            console.log(matchData, 'data');
        }
    }
    catch (error) {
        console.log(error);
    }
    const result = yield payment_model_1.PaymentModel.create(payload);
    console.log(result, 'service create');
    //   const result ='hello'
    return result;
});
exports.paymentService = {
    createPayment,
};
