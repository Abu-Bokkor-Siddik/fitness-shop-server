import { Carts } from './cart.interface';
import { CartModel } from './cart.model';

const createCartToDB = async (cart: Carts) => {
  const result = await CartModel.create(cart);
  return result;
};
// all cart
const allCartsToDB = async (query: Record<string, unknown>) => {
  const queryNew = { ...query };
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }
  // here all search
  const search = CartModel.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { price: { $regex: searchTerm, $options: 'i' } },
    ],
  });
  //   console.log(search)
  // const search =CartModel.find({name:{$regex:searchTerm,$options:'i'}});

  // filter
  const removeSearch = ['searchTerm', 'sort'];
  removeSearch.forEach((value) => delete queryNew[value]);
  // filter multiple
  let filterQuery;

  if (queryNew.category && typeof queryNew.category === 'string') {
    const category = query?.category as string;
    const hello = category?.split(' and ');
    filterQuery = search.find({ category: { $in: [hello[0], hello[1]] } });
  } else {
    filterQuery = search.find(queryNew);
  }
  //  console.log(hello[0])
  // const filterQuery = search.find(queryNew)

  let sort = '+';
  if (query?.sort) {
    sort = query.sort as string;
  }
  const result = await filterQuery.sort(sort);
  return result;
};
// single products
const singleCartToDB = async (_id: string) => {
  const result = await CartModel.findOne({ _id });
  return result;
};

const deleteCartToDB = async (_id: string) => {
  const result = await CartModel.findByIdAndDelete({ _id });
  return result;
};
// update
const updateCartToDB = async (_id: string, payload: Partial<Carts>) => {
  const result = await CartModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};
export const cartsService = {
  createCartToDB,
  allCartsToDB,
  singleCartToDB,
  deleteCartToDB,
  updateCartToDB,
};
