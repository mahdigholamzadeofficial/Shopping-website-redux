import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter, BsTelegram, BsYoutube } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/product/ProductAction";

const Footer = () => {
  const { products, loading } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  let categories = [];
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.data) {
    const mySet = new Set();
    products.data.filter((item) => mySet.add(item.category));
    categories = [...mySet];
  }
  return (
    <div className="bg-footer bg-fixed bg-no-repeat bg-center bg-cover">
      <div className="text-white bg-primary backdrop-blur	 bg-opacity-70 h-full w-full">
        <div className="container mx-auto">

          {/* ////////////////////////////////////////////Top row footer */}
          <div className="flex flex-col md:flex-row justify-between py-5 items-center">

            {/* ////////////////////////////////////////////Top row and left column footer */}
            <div className="w-[90%] md:w-2/6">
              <h1 className="pb-4 text-white text-2xl font-bold pt-5">
                Get Your Shopping
              </h1>
              <p className="text-slate-300 font-bold">
                get your shopping website has been trying to provide products
                that have the best qualities and until now we were able to make
                it;also we provided the lowest prices for our customers too...
              </p>
            </div>

            {/* ////////////////////////////////////////////Top row and right column footer */}
            <div className="w-[90%] md:w-1/6">
              <h1 className="pb-4 text-white text-2xl font-bold pt-5">
                categories
              </h1>
              <ul className="text-white space-y-2 text-slate-300">
                {categories &&
                  categories.map((category, index) => (
                    <li key={index}>
                      <Link>{category.toUpperCase()}</Link>
                    </li>
                  ))}
              </ul>

            </div>
          </div>

          {/* ‌‌‌////////////////////////////////////////////Bottom row footer */}
          <div className="border-t border-1 border-silver flex flex-col md:flex-row justify-between items-center py-5 ">
            <h1 className="text-slate-400 text-lg ">
              Copyright &#169; 2022 All Rights Reserved
            </h1>
            <ul className="items-center justify-center flex text-white my-5 space-x-5">
              <li className="text-2xl hover:opacity-40 ">
                <Link>
                  <BsInstagram />
                </Link>
              </li>
              <li className="text-2xl hover:opacity-40 ">
                <Link>
                  <BsTwitter />
                </Link>
              </li>
              <li className="text-2xl hover:opacity-40 ">
                <Link>
                  <BsTelegram />
                </Link>
              </li>
              <li className="text-2xl hover:opacity-40 ">
                <Link>
                  <BsYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
