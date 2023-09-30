import React, { useState } from "react";
import axiosStore from "../../network/AxiosStore";
export default function AddProduct() {
  const product = useState({
    title: "IPhone 14",
    price: 1799,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });

  const addProduct = () => {
    axiosStore.post(`products`, product);
  };
  return <button className="btn btn-outline-success">Add Product</button>;
}
