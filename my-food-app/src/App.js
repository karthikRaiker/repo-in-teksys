import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import { createContext } from "react";

function App() {
  const CartContext = createContext(null);
  const cart = [
    { id: "", title: "", description: "", price: "", quantity: "" },
  ];
  return (
    <div className="App">
      <div className="App-bg"></div>
      <CartContext.Provider value={{ cart: cart }}>
        <NavBar />
        <Heading />
        <Body />
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
