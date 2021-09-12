export const initialState = {
  products: [],
  cart: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
