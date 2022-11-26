import React from "react";
import { Link } from "react-router-dom";
import { quantityCounter, shorter } from "../../helper/functions";
// import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import ShoppingResult from "./ShoppingResult";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../redux/cart/CartAction";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  return (
    <section className="min-h-screen">
      <div className="py-4">
        {state.selectedItems.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center mx-auto justify-between w-10/12 odd:border-y py-4 last:border-b"
            >
              <img
                src={product.image}
                className="w-[10%] h-[10%] lg:h-[100px]"
                alt=""
              />
              <Link
                to={`/store/product-detail/${product.id}`}
                className="w-[20%] oveflow-hidden text-xs md:text-lg"
              >
                {shorter(product.title, "first letter")}
              </Link>
              <div className="flex items-center justify-center w-[30%]">
                <button
                  className="bg-primary text-white px-3 py-2 md:px-5 md:py-3  text-md md:text-lg  hover:opacity-70 taransition "
                  onClick={() => dispatch(increaseItem(product))}
                >
                  +
                </button>

                <h5 className="quantity px-3 py-2 md:px-5 md:py-3 text-md md:text-lg ">
                  {product.quantity}
                </h5>
                {quantityCounter(state, product) == 1 ? (
                  <button
                    disabled
                    className="bg-slate-400 text-white px-3 py-2 md:px-5 md:py-3 
                    cursor-not-allowed text-md md:text-lg hover:opacity-70 taransition  opacity-30"
                    onClick={() => dispatch(decreaseItem(product))}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="bg-slate-500 text-white px-3 py-2 md:px-5 md:py-3  text-md md:text-lg  hover:opacity-70 taransition"
                    onClick={() => dispatch(decreaseItem(product))}
                  >
                    -
                  </button>
                )}
              </div>

              <div className="w-[10%]">
                <button
                  className="bg-white border borde-2 px-3 py-2 md:px-5 md:py-3 text-md md:text-lg hover:opacity-70 taransition hover:border-zinc-500"
                  onClick={() => dispatch(removeItem(product))}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <h3 className="w-[10%]">${product.price}</h3>
            </div>
          );
        })}
      </div>
      <ShoppingResult />
    </section>
  );
};

export default ShoppingCart;
