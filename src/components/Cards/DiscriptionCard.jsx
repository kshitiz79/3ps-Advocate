import React from "react";

const DescriptionCard = ({ selectedPlan, plans }) => {
  const currentPlan = plans[selectedPlan];

  return (
    <div className="p-4 rounded shadow-all border border-gray-200">
      <h3 className="text-lg font-bold text-gray-700">{selectedPlan}</h3>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
        {currentPlan?.description?.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionCard;
