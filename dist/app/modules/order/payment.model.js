"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
    },
    _id: {
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
    cart: {
        type: String,
    },
});
const paymentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    carts: {
        type: [cartSchema]
    }
}, {
    timestamps: true,
});
exports.PaymentModel = (0, mongoose_1.model)('payments', paymentSchema);
