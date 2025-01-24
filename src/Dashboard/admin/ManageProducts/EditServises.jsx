import React, { useState, useEffect } from "react";
import TitleSection from "./TitleSection";
import PricingSection from "./PrisingSection";

import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../redux/features/product/productApi";
import { useParams, useNavigate } from "react-router-dom";
import uploadImage from "../../../utils/uploadimage";
import MainContentSectionEdit from "./MainContentSection";
import DocRequiredSectionEdit from "./DocRequiredSectionEdit";

const EditServices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({ title: "", image: "", pricing: {}, mainContent: {},documentRequirements: [], });

  useEffect(() => {
    if (data?.data) setFormData(data.data);
  }, [data]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const uploadedImageUrl = await uploadImage(reader.result);
        setFormData((prev) => ({ ...prev, image: uploadedImageUrl }));
      } catch (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload image.");
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({ id, productData: formData }).unwrap();
      alert("Service updated successfully!");
      navigate("/admin-dashboard/all-services");
    } catch (error) {
      console.error("Error updating service:", error.message);
      alert("Failed to update service.");
    }
  };

  const updateNestedField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-8 shadow-lg rounded-lg text-white max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Update Services</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <TitleSection
          formData={formData}
          handleImageUpload={handleImageUpload}
          updateNestedField={updateNestedField}
          uploading={uploading}
        />
        <PricingSection formData={formData} setFormData={setFormData} />
        <MainContentSectionEdit formData={formData} setFormData={setFormData} />
        <DocRequiredSectionEdit formData={formData} setFormData={setFormData} />
        <button
          type="submit"
          className="w-1/6 bg-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};

export default EditServices;
