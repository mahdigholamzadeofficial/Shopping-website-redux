import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <nav className="bg-primary py-4 px-4 sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/store">
          <h2 className="text-white font-extrabold">Get Your Shopping</h2>
        </Link>

        <Link className="text-white text-3xl relative" to="/shopping-cart">
          <span className="bg-white text-primary px-2 absolute text-sm -top-2 -right-2 rounded-full font-bolder animate-bounce	">
            {state.totalItems ? state.totalItems : 0}
          </span>
          <MdShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
