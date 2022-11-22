const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        loading: false,
        products: [],
        error: payload,
      };

    default:
      return state;
  }
};
