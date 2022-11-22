import React from "react";
import { Link } from "react-router-dom";
import { shorter } from "../../helper/functions";
import Stars from "./Stars";

const ProductsCard = ({ product }) => {
  const rate = Math.round(product.rating.rate);
  return (
    <div className="w-[40%] md:w-1/3 h-[290px] sm:h-full lg:w-3/12 xl:w-2/12 bg-white shadow-lg p-5 sm:py-7 sm:px-2 gap-2 m-3 relative group overflow-hidden rounded-lg">
      <img className="w-40 h-32 mx-auto" src={product.image} alt="" />
      <div className=" sm:py-5 sm:px-2">
        <h4 className="text-primary my-3">${product.price}</h4>
        <h6 className="text-primary text-sm my-3">{shorter(product.title)}</h6>
        <div className="flex items-center text-xs sm:text-base">
          <span className="text-gold">
            <Stars rate={rate} />
          </span>
          <p className="text-gray-500">({product.rating.count})</p>
        </div>
      </div>
      <Link
        to={`/store/product-detail/${product.id}`}
        className="group absolute bottom-[-100%] taransition rounded-t-xl right-0 bg-primary opacity-90 h-full w-full group-hover:bottom-0
      text-white flex items-center justify-center tracking-widest	"
      >
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[200ms]">
          M
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[400ms]">
          O
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[600ms]">
          R
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[800ms]">
          E
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[1000ms]">
          .
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[1200ms]">
          .
        </span>
        <span className="translate-y-16 opacity-0 group-hover:opacity-90 group-hover:translate-y-0 transition duration-[1100ms] delay-[1400ms]">
          .
        </span>
      </Link>
    </div>
  );
};

export default ProductsCard;
