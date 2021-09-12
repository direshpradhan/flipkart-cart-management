export const initialState = {
  products: [],
  cart: [],
  saveForLater: [],
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: payload };

    case "ADD_TO_CART":
      const isInCart = state.cart.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (!isInCart) {
        return { ...state, cart: [...state.cart, payload] };
      }
      return state;

    default:
      return state;
  }
};
