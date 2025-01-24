import React from "react";

const DescriptionCard = ({ selectedPlan, plans }) => {
  const currentPlan = plans[selectedPlan] || {};
  const description = currentPlan.description;

  return (
    <div className="p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold text-gray-700 mb-4 capitalize">
        {selectedPlan} Plan Details
      </h3>

      {/* If description is an array of HTML strings, render each one. */}
      {Array.isArray(description) && description.length > 0 ? (
        description.map((descItem, idx) => (
          <div
            key={idx}
            className="text-sm text-gray-600 text-start mb-3"
            dangerouslySetInnerHTML={{ __html: descItem }}
          />
        ))
      ) : (
        <p className="text-sm text-gray-600 whitespace-pre-line text-start">
          No description available.
        </p>
      )}
    </div>
  );
};

export default DescriptionCard;
