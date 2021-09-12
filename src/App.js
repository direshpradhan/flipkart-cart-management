// import logo from './logo.svg';
import { useEffect } from "react";
import "./App.css";
import { useData } from "./context/DataContext";
import { ProductListing } from "./pages/productListing/ProductListing";
import { products } from "./data/data.json";

function App() {
  const { dispatch } = useData();

  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
  }, [dispatch]);

  return (
    <div className="App">
      <ProductListing />
    </div>
  );
}

export default App;
