"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post('/cart', cart_controller_1.cartControllers.cartController);
router.get('/cart', cart_controller_1.cartControllers.allCartsController);
router.get('/cart/:id', cart_controller_1.cartControllers.singleCart);
router.delete('/cart/:id', cart_controller_1.cartControllers.deleteCart);
router.put('/cart/:id', cart_controller_1.cartControllers.updateCart);
// todo
router.get('/payCart', cart_controller_1.cartControllers.paymentCart);
exports.cartRouter = router;
