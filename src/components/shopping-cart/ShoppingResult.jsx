import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
///// Redux
import { useDispatch, useSelector } from "react-redux";
import { checkoutItem, clearItem } from "../../redux/cart/CartAction";

const ShoppingResult = () => {
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  /////// redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  const clickHandler = (checkout) => {
    if (checkout) {
      dispatch(checkoutItem());
      toast.success("Congratulations", { position: "top-center" });
    } else {
      dispatch(clearItem());
      navigate("/store", { replace: true });
    }
  };
  return (
    <div>
      <div className="w-[90%] flex flex-col sm:flex-wrap sm:flex-row p-8 md:flex-row gap-4 items-center justify-between mx-auto">
        <div className=" w-[100%] sm:w-[40%] md:w-1/5 border p-5 flex item-cetner justify-between">
          <h3>Discount</h3>
          <h3 className="font-bold">
            {state.discount ? `$${state.discount.toFixed(2)}` : "$0.00"}
          </h3>
        </div>
        <div className=" w-[100%] sm:w-[40%] md:w-1/5 border p-5 flex item-cetner justify-between">
          <h3>Delivery</h3>
          <h3 className="font-bold">
            {state.delivery ? `$${state.delivery.toFixed(2)}` : "$0.00"}
          </h3>
        </div>
        <div className=" w-[100%] sm:w-[40%] md:w-1/5 border p-5 flex item-cetner justify-between">
          <h3>Total Items</h3>
          <h3 className="font-bold">{`${
            state.totalItems ? state.totalItems : "0"
          }`}</h3>
        </div>
        <div className=" w-[100%] sm:w-[40%] md:w-1/5 border p-5 flex item-cetner justify-between">
          <h3>Total</h3>
          <h3 className="font-bold">{`${
            state.totalPrice ? `$${state.totalPrice.toFixed(2)} ` : "$0.00"
          }`}</h3>
        </div>
      </div>
      {state.checkout && state.totalItems == false && (
        <div className="flex items-center justify-center w-[90%] mx-auto p-8 text-primary text-center font-bold text-xl">
          <h1>
            Thanks For Choosing Us! <br />
            You Will Get Your Products At Less Than A Week!
          </h1>
        </div>
      )}
      <div className="flex items-center flex-col md:flex-row flex-wrap  md:flex-nowrap  justify-between w-[90%] mx-auto p-8">
        <div className="lg:w-9/12 w-full mx-auto md:block md:flex">
          <input
            className="border w-full md:w-9/12 focus:border-primary py-4 pl-4 outline-none"
            type="number"
            placeholder="Please enter a coupon code number"
            name="coupon"
            onChange={(e) => setCoupon(e.target.value)}
            value={coupon}
            id=""
          />
          <button className="bg-primary w-full mb-5 md:mb-0 md:w-1/5 text-white  py-4 hover:opacity-50 transition duration-500 ease-in-out">
            Apply Discount
          </button>
        </div>
        {state.totalItems ? (
          <button
            onClick={() => clickHandler(true)}
            className="bg-primary text-white w-full md:w-1/5 py-4 hover:opacity-50 transition duration-500 ease-in-out"
          >
            Checkout
          </button>
        ) : (
          <button
            onClick={() => clickHandler(false)}
            className="bg-primary text-white w-full md:w-1/5 py-4 hover:opacity-50 transition duration-500 ease-in-out"
          >
            Go for shopping
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShoppingResult;
