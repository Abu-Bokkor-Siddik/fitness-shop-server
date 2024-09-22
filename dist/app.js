"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cart_router_1 = require("./app/modules/products/cart.router");
// import config from "./app/config";
const payment_router_1 = require("./app/modules/order/payment.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"]
}));
app.use('/api', cart_router_1.cartRouter);
app.use('/api', payment_router_1.paymentRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
