export const initialState = {
  products: [],
  cart: [],
  saveLater: [],
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

    case "REMOVE_FROM_CART":
      const newFilteredCart = state.cart.filter(
        (cartItem) => cartItem.id !== payload
      );
      return { ...state, cart: newFilteredCart };

    case "ADD_TO_SAVE_LATER":
      const isInSaveLater = state.saveLater.find(
        (saveItem) => saveItem.id === payload.id
      );
      if (!isInSaveLater) {
        return { ...state, saveLater: [...state.saveLater, payload] };
      }
      return state;

    case "REMOVE_FROM_SAVE_LATER":
      const newFilteredSaveLater = state.saveLater.filter(
        (saveItem) => saveItem.id !== payload
      );
      return { ...state, saveLater: newFilteredSaveLater };

    case "MOVE_TO_CART":
      return { ...state, cart: [...state.cart, payload] };

    default:
      return state;
  }
};
