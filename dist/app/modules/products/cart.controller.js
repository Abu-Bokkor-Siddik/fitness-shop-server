"use strict";
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
exports.cartControllers = void 0;
const cart_service_1 = require("./cart.service");
const cartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.cartsService.createCartToDB(req.body);
        res.status(200).json({
            success: true,
            message: 'cart created successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// get all carts 
const allCartsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const result = yield cart_service_1.cartsService.allCartsToDB(req.query);
        res.status(200).json({
            success: true,
            message: 'Carts fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// single cart 
const singleCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cart_service_1.cartsService.singleCartToDB(id);
        res.status(200).json({
            success: true,
            message: 'Single cart fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cart_service_1.cartsService.deleteCartToDB(id);
        res.status(200).json({
            success: true,
            message: 'Delete cart successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// update cart 
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield cart_service_1.cartsService.updateCartToDB(id, payload);
        res.status(200).json({
            success: true,
            message: 'update cart successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// get paymentCarts 
const paymentCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const result = yield cart_service_1.cartsService.paymentCartsDB(req.query);
        res.status(200).json({
            success: true,
            message: 'payment cart fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.cartControllers = {
    cartController,
    allCartsController,
    singleCart,
    deleteCart,
    updateCart,
    paymentCart,
};
