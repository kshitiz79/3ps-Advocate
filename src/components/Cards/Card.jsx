import React from "react";

const PricingCard = ({ selectedPlan, setSelectedPlan, plans }) => {
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const currentPrices = plans[selectedPlan];

  return (
    <div className="p-8 w-full max-w-md mx-auto rounded-lg shadow-all border border-gray-200">
      {/* Plan Selector */}
      <div className="flex justify-between mb-6 space-x-2 lg:-ml-[4%] -ml-[7%]">
        {Object.keys(plans).map((plan) => (
          <button
            key={plan}
            onClick={() => handlePlanChange(plan)}
            className={`w-2/3 px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap ${
              selectedPlan === plan
                ? "bg-blue-300 shadow-md border"
                : "hover:bg-blue-550 border"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>

      {/* Pricing Details */}
      {currentPrices && (
        <div className="space-y-4 text-gray-700 text-sm mt-8">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Market Price:</span>
            <span>₹ {currentPrices.marketPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Discount:</span>
            <span>- ₹ {currentPrices.discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Our Price:</span>
            <span className="text-blue-600 font-bold">
              ₹ {currentPrices.ourPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">GST:</span>
            <span>
              ₹ {currentPrices.gst.toFixed(2)}{" "}
              <span className="text-gray-500">
                ({((currentPrices.gst / currentPrices.ourPrice) * 100).toFixed(0)}%)
              </span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Gov. Fee:</span>
            <span>₹ {currentPrices.govFee.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
