import React from "react";
import { Link } from "react-router-dom";
import { shorter } from "../../helper/functions";
import Stars from "../product/Stars";

const ProductDetailCard = ({ product }) => {
  return (
    <Link
      to={`/store/product-detail/${product.id}`}
      className="flex flex-row my-4 bg-white p-2 rounded hover:opacity-70 transition-all duration-400 ease-in-out sm:w-[40%] lg:w-full"
    >
      <img src={product.image} className="w-[100px] h-[100px]" alt="" />
      <div className="m-4">
        <h4>{shorter(product.title)}</h4>
        <h4>${product.price}</h4>
        <span className="text-gold">
          <Stars rate={Math.round(product.rating.rate)} />
        </span>
      </div>
    </Link>
  );
};

export default ProductDetailCard;
