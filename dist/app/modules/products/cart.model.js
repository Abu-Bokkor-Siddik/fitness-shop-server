"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
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
    cart: {
        type: String,
    }
}, {
    timestamps: true,
});
exports.CartModel = (0, mongoose_1.model)('carts', cartSchema);
