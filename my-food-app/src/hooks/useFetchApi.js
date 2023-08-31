import { useState, useEffect } from "react";
import { BASE_URL } from "../Constant";
import axios from "axios";

function useFetchApi(url = BASE_URL, query = "products") {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: products } = await axios.get(`${url}${query}`);
    setData(products?.products);
  };
  return [data, setData];
}

export default useFetchApi;
