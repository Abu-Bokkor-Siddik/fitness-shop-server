"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// import dotenv from 'dotenv';
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
// check
// console.log(process.cwd());
exports.default = {
    port: process.env.PORT,
    database_URL: process.env.DATABASE_URL,
    strip: process.env.STRIP,
};
