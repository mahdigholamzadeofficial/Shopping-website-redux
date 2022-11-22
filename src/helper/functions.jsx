const shorter = (oldTitle, quantity) => {
  const title = oldTitle.split(" ");

  if (quantity) {
    return `${title[0]} ...`;
  }
  if (title[0] !== "-" && title[1] !== "-") {
    const result = ` ${title[0]} ${title[1]}`;
    return result;
  } else {
    const result = ` ${title[0]} ${title[2]}`;
    return result;
  }
};

const quantityCounter = (state, product) => {
  const index = state.selectedItems.findIndex((item) => item.id == product.id);
  if (index == -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export { shorter, quantityCounter };
