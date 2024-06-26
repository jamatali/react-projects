import React from "react";
import { useEffect } from "react";
import axiosInstance from "../axios/axios";
function Products() {
  const productsCall = async () => {
    const response = await axiosInstance.get("/products");
    console.log(response.data[0]);
  };
  useEffect(() => {
    // make API Call
    productsCall();
  }, []);
  return <h1 className="p-3 bg-red-500">Products</h1>;
}

export default Products;
