import axios from "axios";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};

const fetchProductsSuccess = (payload) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload,
  };
};

const fetchProductsFailure = (paylod) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    paylod,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => dispatch(fetchProductsSuccess(response)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
};
