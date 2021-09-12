// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import { useData } from "./context/DataContext";
import { ProductListing } from "./pages/productListing/ProductListing";
import { products } from "./data/data.json";
import { Cart } from "./pages/cart/Cart";
import { Nav } from "./components/nav/Nav";

function App() {
  const { dispatch } = useData();
  const [route, setRoute] = useState("home");

  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
  }, [dispatch]);

  return (
    <div className="">
      <Nav setRoute={setRoute} />
      {route === "home" && <ProductListing />}
      {route === "cart" && <Cart />}
    </div>
  );
}

export default App;
