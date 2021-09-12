import React, { createContext, useContext, useReducer } from "react";
import { dataReducer, initialState } from "../reducer/DataReducer";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider
      value={{
        cart: state.cart,
        products: state.products,
        saveLater: state.saveLater,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
