export type Stock = {
    quantity: number;
    isStock: boolean;
  };

export type Cartes = {
    name: string;
    price: string;
    description: string;
    images: string;
    quantity:number;
    category: string;
    _id:string;
    stock: Stock;
    cart:string;
  };

export type PriceTypes={
   name:string,
   email:string,
   phoneNumber:string,
   address:string,
   transactionId:string,
   carts:[Cartes],
}