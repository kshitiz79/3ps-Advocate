import React, { useState } from "react";
import PricingCard from "./Card";
import DescriptionCard from "./DiscriptionCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const PricingAndDescription = ({ pageData }) => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const dispatch = useDispatch();

  // Fallback for empty plans; matching new schema field names
  const plans = pageData?.pricing || {
    basic: {
      marketPrice: 0,
      discountPercentage: 0,
      gstPercentage: 0,
      governmentFee: 0,
      discountAmount: 0,
      gstAmount: 0,
      finalPrice: 0,
      description: ["No description available."],
    },
    standard: {
      marketPrice: 0,
      discountPercentage: 0,
      gstPercentage: 0,
      governmentFee: 0,
      discountAmount: 0,
      gstAmount: 0,
      finalPrice: 0,
      description: ["No description available."],
    },
    premium: {
      marketPrice: 0,
      discountPercentage: 0,
      gstPercentage: 0,
      governmentFee: 0,
      discountAmount: 0,
      gstAmount: 0,
      finalPrice: 0,
      description: ["No description available."],
    },
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: pageData.id,
      name: pageData.title,
      imageUrl: pageData.image?.trim()
        ? pageData.image
        : "https://via.placeholder.com/600x300?text=No+Image",
      plan: selectedPlan,
      price: plans[selectedPlan]?.finalPrice || 0,
    };

    dispatch(addToCart(productToAdd));
    alert("Product added to cart!");
  };  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <PricingCard
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        plans={plans}
      />
      <DescriptionCard selectedPlan={selectedPlan} plans={plans} />

      {/* Action Buttons */}
      <div className="flex flex-cols gap-4 w-full">
        <button
          onClick={handleAddToCart}
          className="bg-blue-700 w-full text-white py-2 rounded hover:bg-blue-800"
        >
          Add to Cart
        </button>
        <button className="bg-sky-500 w-full text-white py-2 rounded hover:bg-sky-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PricingAndDescription;
