import React from "react";
import { useAddProductMutation } from "../../../redux/features/product/productApi";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();

  const handleSubmit = async (formData) => {
    try {
      await addProduct(formData).unwrap();
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="p-8 text-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Add New Service
      </h1>
      <AddProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
