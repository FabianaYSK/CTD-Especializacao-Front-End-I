const State = {
  products: [],
  user: "",
  login: "",
};

export default function ProductsReducer(state = State, action) {
  if (action.type === "ADD_PRODUCT") {
    const copyState = { ...state };

    copyState.products.push({ ...action.payload.product, id: Date.now() });

    return { ...copyState };
  }

  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      products: [],
    };
  }

  /* if (action.type === "REMOVE_PRODUCT") {
    return {
      ...state,
      products: state.products.filter((_, index) => index !== action.payload.index)
    };
  } */

  if (action.type === 'REMOVE_PRODUCT') {
    const copyState = { ...state };
    copyState.products.splice(action.payload.idx, 1);
    return { ...copyState };
  }

  return state;
}
