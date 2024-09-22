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
exports.cartsService = void 0;
const cart_model_1 = require("./cart.model");
const createCartToDB = (cart) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.CartModel.create(cart);
    return result;
});
// all cart
const allCartsToDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const queryNew = Object.assign({}, query);
    let searchTerm = '';
    if (query === null || query === void 0 ? void 0 : query.searchTerm) {
        searchTerm = query.searchTerm;
    }
    // here all search
    const search = cart_model_1.CartModel.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { price: { $regex: searchTerm, $options: 'i' } },
        ],
    });
    // filter
    const removeSearch = ['searchTerm', 'sort'];
    removeSearch.forEach((value) => delete queryNew[value]);
    // filter multiple
    let filterQuery;
    if (queryNew.category && typeof queryNew.category === 'string') {
        const category = query === null || query === void 0 ? void 0 : query.category;
        const hello = category === null || category === void 0 ? void 0 : category.split(' and ');
        filterQuery = search.find({ category: { $in: [hello[0], hello[1]] } });
    }
    else {
        filterQuery = search.find(queryNew);
    }
    //  console.log(hello[0])
    // const filterQuery = search.find(queryNew)
    let sort = '+';
    if (query === null || query === void 0 ? void 0 : query.sort) {
        sort = query.sort;
    }
    const result = yield filterQuery.sort(sort);
    return result;
});
// single products
const singleCartToDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.CartModel.findOne({ _id });
    return result;
});
const deleteCartToDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.CartModel.findByIdAndDelete({ _id });
    return result;
});
// update
const updateCartToDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.CartModel.findByIdAndUpdate({ _id }, payload, {
        new: true,
    });
    return result;
});
// get paymentCarts
const paymentCartsDB = (cart) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(cart);
    const result = yield cart_model_1.CartModel.find(cart);
    return result;
});
exports.cartsService = {
    createCartToDB,
    allCartsToDB,
    singleCartToDB,
    deleteCartToDB,
    updateCartToDB,
    paymentCartsDB
};
