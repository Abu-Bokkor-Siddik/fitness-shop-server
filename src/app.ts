import cors from "cors";
import express, { Application, Request, Response } from "express";
import { cartRouter } from "./app/modules/products/cart.router";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api',cartRouter)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
