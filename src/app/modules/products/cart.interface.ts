export type Stock = {
  quantity: number;
  isStock: boolean;
};

export type Carts = {
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
  stock: Stock;
};
