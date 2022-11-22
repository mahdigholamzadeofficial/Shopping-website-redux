import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

////////////////////////////////// Contexts
// import { ProductsContext } from "../../contexts/ProductContextProvider";

////////////////////////////////// Icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";

////////////////////////////////// Components
import ProductDetailCard from "./ProductDetailCard";
import Stars from "../product/Stars";

////////////////////////////////// Helper
import { quantityCounter } from "../../helper/functions";

////////////////////////////////// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/CartAction";
import { fetchProducts } from "../../redux/product/ProductAction";

const ProductDetail = () => {
  const state = useSelector((state) => state.cartState);
  const { products } = useSelector((state) => state.productState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  ////////////////////////////////// Getting the right product
  const params = useParams();
  const id = params.id;
  let product;
  if (products.data) {
    product = products.data[id - 1];
  }
  return (
    product && (
      <div className="max-h-screen flex flex-col lg:flex-row justify-between">
        {/* ////////////////////////////  Left side of the container */}
        <div className="w-5/6 flex justify-center items-center flex-col pt-10 text-primary mx-auto lg:mx-0 lg:w-9/12 lg:flex-row lg:items-start lg:mt-40">
          <img
            className="w-[300px] h-[300px] md:mx-0 mx-auto md:mx-10 animate-[imageAni_600ms_ease-in-out]"
            src={product.image}
            alt=""
          />
          <div className="w-[90%] lg:w-[60%]  my-10 sm:my-0">
            <Link
              to="/store"
              className="flex items-center space-x-3 mb-6 hover:opacity-70"
            >
              <BsFillArrowLeftSquareFill />
              <p>Back to store</p>
            </Link>
            <p className="text-gray-400">{product.category}</p>
            <h2 className="font-bold text-2xl animate-[titleAni_700ms_ease-in-out]">
              {product.title}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-gold">
                <Stars rate={Math.round(product.rating.rate)} />
              </span>
              <p className="my-4">
                {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
            <p className="w-[100%]">{product.description}</p>
            <div className="flex items-center justify-between flex-col sm:flex-row relative overflow-hidden">
              <h2 className="text-5xl mt-[120px] web-text  sm:my-5">
                $ {product.price}
              </h2>
              <button
                className={`bg-emerald-700 web-text w-full sm:w-[160px] justify-center text-white px-6 py-3 text-lg rounded hover:opacity-70 taransition flex items-center absolute mt-10 sm:mt-0 ${
                  quantityCounter(state, product) ? "right-[-100%]" : "right-0"
                } `}
                onClick={() => dispatch(addItem(product))}
              >
                <MdAddShoppingCart />
                Add to cart
              </button>
              <button
                className={`bg-rose-700 web-text w-full sm:w-[180px] justify-center text-white px-6 py-3 text-lg rounded hover:opacity-70 taransition flex items-center absolute mt-10 sm:mt-0 ${
                  quantityCounter(state, product) ? "right-0" : "right-[-100%]"
                }`}
                onClick={() => dispatch(removeItem(product))}
              >
                <BsTrashFill />
                Remove item
              </button>
            </div>
          </div>
        </div>

        {/* ////////////////////////////  Right side of the container */}
        <div
          className="mx-auto px-2 bg-zinc-300 w-5/6 flex flex-col sm:flex-row sm:flex-wrap  
          sm:justify-evenly lg:w-1/5 lg:mx-0 lg:overflow-scroll lg:justify-start lg:flex-col lg:flex-nowrap"
        >
          {products.data.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
  );
};

export default ProductDetail;
