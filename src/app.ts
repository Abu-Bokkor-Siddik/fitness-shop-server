import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { cartRouter } from './app/modules/products/cart.router';
// import config from "./app/config";
import { paymentRouter } from './app/modules/order/payment.router';
const app: Application = express();
app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173"]
}));
app.use('/api', cartRouter);
app.use('/api', paymentRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
