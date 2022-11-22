const initialState = {
  selectedItems: [],
  totalPrice: "",
  totalItems: "",
  discount: "",
  delivery: "",
  checkout: false,
  clear: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  ////////////////////////////////// Counter number of all the items
  const items = (items) => {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    return { totalItems };
  };
  ////////////////////////////////// Counter price of all the items
  const prices = (items) => {
    const totalPrice = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return { totalPrice };
  };

  ////////////////////////////////// Check that which action has dispatched
  switch (type) {
    case "ADD_ITEM":
      state.selectedItems.push({ ...payload, quantity: 1 });
      return {
        ...state,
        ...prices(state.selectedItems),
        ...items(state.selectedItems),
        selectedItems: [...state.selectedItems],
      };
    case "REMOVE_ITEM":
      const newItems = state.selectedItems.filter(
        (item) => item.id !== payload.id
      );
      return {
        ...state,
        ...prices(newItems),
        ...items(newItems),
        selectedItems: newItems,
      };
    case "INCREASE_ITEM":
      const increasingIndex = state.selectedItems.findIndex(
        (item) => item.id === payload.id
      );
      state.selectedItems[increasingIndex].quantity++;
      return {
        ...state,
        ...prices(state.selectedItems),
        ...items(state.selectedItems),
        selectedItems: [...state.selectedItems],
      };

    case "DECREASE_ITEM":
      const decreasingIndex = state.selectedItems.findIndex(
        (item) => item.id === payload.id
      );
      state.selectedItems[decreasingIndex].quantity--;
      return {
        ...state,
        ...prices(state.selectedItems),
        ...items(state.selectedItems),
        selectedItems: [...state.selectedItems],
      };
    case "CHCKOUT":
      return {
        selectedItems: [],
        totalPrice: "",
        totalItems: "",
        discount: "",
        delivery: "",
        checkout: true,
        clear: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        totalPrice: "",
        totalItems: "",
        discount: "",
        delivery: "",
        checkout: false,
        clear: true,
      };
    default:
      return state;
  }
};
