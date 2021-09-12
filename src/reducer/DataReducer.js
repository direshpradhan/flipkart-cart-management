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
        return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
      }
      return state;

    case "INCREMENT_QUANTITY":
      const newIncrementedCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      return { ...state, cart: newIncrementedCart };

    case "DECREMENT_QUANTITY":
      const newDecrementedCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: newDecrementedCart };

    default:
      return state;
  }
};
