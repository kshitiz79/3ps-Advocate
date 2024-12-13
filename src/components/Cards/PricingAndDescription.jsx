import React, { useState } from "react";
import PricingCard from "./Card";
import DescriptionCard from "./DiscriptionCard";

const PricingAndDescription = ({ pageData }) => {
  const [selectedPlan, setSelectedPlan] = useState("Basic Plan");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <PricingCard 
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan} 
        plans={pageData.plans} 
      />
      <DescriptionCard 
        selectedPlan={selectedPlan} 
        plans={pageData.plans} 
      />
      <button className="bg-blue-700 w-full text-white">Add to Cart</button>
      <button className="bg-sky-500 w-full text-white">Buy Now</button>
    </div>
  );
};

export default PricingAndDescription;
