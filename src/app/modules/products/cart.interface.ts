export type Stock = {
  quantity: number;
  isStock: boolean;
};

export type Carts = {
  name: string;
  price: string;
  description: string;
  images: string;
  category: string;
  stock: Stock;
  cart:string;
};
