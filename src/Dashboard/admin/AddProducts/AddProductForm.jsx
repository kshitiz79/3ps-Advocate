import React, { useState } from "react";
import TitleImageSection from "./TitleImageSection";
import PricingPlansSection from "./PricingPlansSection";

import baseUrl from './../../../utils/baseURL';
import MainContentSectionAdd from "./MainContentSection";
import DocRequiredSection from "./DocRequiredSection";
const AddProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    pricing: {
      basic: {
        marketPrice: 0,
        finalPrice: 0,
        discount: 0,
        gstPercentage: 0,
        govFee: 0,
        description: [""],
      },
      standard: {
        marketPrice: 0,
        finalPrice: 0,
        discount: 0,
        gstPercentage: 0,
        govFee: 0,
        description: [""],
      },
      premium: {
        marketPrice: 0,
        finalPrice: 0,
        discount: 0,
        gstPercentage: 0,
        govFee: 0,
        description: [""],
      },
    },
    mainContent: {
      heading: "",
      paragraphs: [""],
      subHeadings: { title1: "", text1: "", title2: "", text2: "" },
    },
    documentRequirements: [],
  });

  const [uploading, setUploading] = useState(false);

  // Convert a file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  /**
   * Handle image upload
   */
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const base64Image = await convertToBase64(file);
      // Upload to your server or external service
      const response = await fetch(
        `${baseUrl}/uploadImage`,
        {
          method: "POST",
          body: JSON.stringify({ image: base64Image }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (response.ok) {
        // `data` should be the uploaded image URL from the server
        setFormData((prev) => ({ ...prev, image: data }));
        alert("Image uploaded successfully!");
      } else {
        console.error("Upload failed:", data);
        alert("Image upload failed. Please try again.");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* -- Title & Image -- */}
      <TitleImageSection
        formData={formData}
        setFormData={setFormData}
        handleImageUpload={handleImageUpload}
        uploading={uploading}
      />

      {/* -- Pricing Plans -- */}
      <PricingPlansSection formData={formData} setFormData={setFormData} />

      {/* -- Main Content -- */}
      <MainContentSectionAdd formData={formData} setFormData={setFormData} />
      <DocRequiredSection formData={formData} setFormData={setFormData} />

      <button
        type="submit"
        className="w-1/6 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
