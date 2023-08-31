import React from "react";
import "./components.css";
import BodyItem from "./BodyItem";
import useFetchApi from "../hooks/useFetchApi";
import { BASE_URL } from "../Constant";

function Body() {
  const [products, setProducts] = useFetchApi(BASE_URL, "products");
  console.log(products);
  return (
    <div className="Body">
      {products?.length > 0
        ? products.map((product) => <BodyItem id={product.id} {...product} />)
        : null}
    </div>
  );
}

export default Body;
