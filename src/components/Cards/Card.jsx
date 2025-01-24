import React from "react";

const PricingCard = ({ selectedPlan, setSelectedPlan, plans }) => {
  // Get current plan data safely
  const currentPlan = plans[selectedPlan] || {};

  return (
    <div className="p-8 w-full max-w-md mx-auto rounded-lg shadow-all border border-gray-200">
      {/* Plan Selector */}
      <div className="flex justify-between mb-6 space-x-2">
        {Object.keys(plans).map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`w-2/3 px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap ${
              selectedPlan === plan
                ? "bg-blue-300 shadow-md border"
                : "hover:bg-blue-550 border"
            }`}
          >
            {plan.charAt(0).toUpperCase() + plan.slice(1)}
          </button>
        ))}
      </div>

      {/* Pricing Details */}
      <div className="space-y-4 text-gray-700 text-sm">
        {/* Market Price */}
        <div className="flex justify-between">
          <span>Market Price:</span>
          <span>₹ {currentPlan.marketPrice || 0}</span>
        </div>

        {/* Discount Percentage */}
        <div className="flex justify-between">
          <span>Discount %:</span>
          <span>{currentPlan.discountPercentage || 0}%</span>
        </div>

        {/* Discount Amount (calculated on backend) */}
        {/* <div className="flex justify-between">
          <span>Discount Amount:</span>
          <span>- ₹ {currentPlan.discountAmount || 0}</span>
        </div> */}

        {/* GST Percentage */}
        <div className="flex justify-between">
          <span>GST %:</span>
          <span>{currentPlan.gstPercentage || 0}%</span>
        </div>

      
        {/* <div className="flex justify-between">
          <span>GST Amount:</span>
          <span>₹ {currentPlan.gstAmount || 0}</span>
        </div> */}

     
        <div className="flex justify-between">
          <span>Government Fee:</span>
          <span>₹ {currentPlan.governmentFee || 0}</span>
        </div>

        {/* Final Price (calculated on backend) */}
        <div className="flex justify-between font-semibold text-blue-600">
          <span>Final Price:</span>
          <span>₹ {currentPlan.finalPrice || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
