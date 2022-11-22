import { combineReducers } from "redux";
import { cartReducer } from "./cart/CartReducer";
import { productReducer } from "./product/ProductReducer";

export const rootReducer = combineReducers({
  cartState: cartReducer,
  productState: productReducer,
});
