const addItem = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

const removeItem = (payload) => {
  return {
    type: "REMOVE_ITEM",
    payload,
  };
};
const increaseItem = (payload) => {
  return {
    type: "INCREASE_ITEM",
    payload,
  };
};
const decreaseItem = (payload) => {
  return {
    type: "DECREASE_ITEM",
    payload,
  };
};
const checkoutItem = (payload) => {
  return {
    type: "CHCKOUT",
    payload,
  };
};
const clearItem = (payload) => {
  return {
    type: "CLEAR",
    payload,
  };
};

export {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  checkoutItem,
  clearItem,
};
