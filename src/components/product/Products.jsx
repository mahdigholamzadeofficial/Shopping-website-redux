import React, { useEffect } from "react";
////////////////////////////////// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/product/ProductAction";

////////////////////////////////// Componetns
import Loader from "../loader/Loader";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { products } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container min-h-screen flex-wrap flex items-center justify-evenly mx-auto p-5">
      {products.data ? (
        products.data.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))
      ) : (
        ////////////////////////////////// In case we had not received data from server Loader component will be returned
        <Loader />
      )}
    </div>
  );
};

export default Products;
