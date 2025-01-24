import React, { useRef } from "react";

const PricingSection = ({ formData, setFormData }) => {
  // Create default pricing object to avoid undefined errors
  const pricing = formData?.pricing || {
    basic: {
      marketPrice: "",
      discountPercentage: "",
      gstPercentage: "",
      governmentFee: "",
      discountAmount: "",
      gstAmount: "",
      finalPrice: "",
      description: "",
    },
    standard: {
      marketPrice: "",
      discountPercentage: "",
      gstPercentage: "",
      governmentFee: "",
      discountAmount: "",
      gstAmount: "",
      finalPrice: "",
      description: "",
    },
    premium: {
      marketPrice: "",
      discountPercentage: "",
      gstPercentage: "",
      governmentFee: "",
      discountAmount: "",
      gstAmount: "",
      finalPrice: "",
      description: "",
    },
  };

  /**
   * We’ll keep a ref object with a key for each plan
   * since each plan has exactly one description textarea.
   */
  const textAreaRefs = useRef({
    basic: null,
    standard: null,
    premium: null,
  });

  // Handle numeric field changes
  const handlePricingChange = (plan, field, value) => {
    const updatedValue = value === "" ? "" : parseFloat(value) || 0;

    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          [field]: updatedValue,
        },
      },
    }));
  };

  // Handle description changes
  const handleDescriptionChange = (plan, value) => {
    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          description: value,
        },
      },
    }));
  };

  /**
   * Wrap the user’s selected text (in the textarea) with <b> tags.
   */
  const handleBoldSelection = (plan) => {
    const textarea = textAreaRefs.current[plan];
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;

    // If no text is selected, do nothing (or handle differently if you like)
    if (selectionStart === selectionEnd) return;

    const before = value.substring(0, selectionStart);
    const selected = value.substring(selectionStart, selectionEnd);
    const after = value.substring(selectionEnd);

    // Insert <b> around the selection
    const newDescription = `${before}<b>${selected}</b>${after}`;

    handleDescriptionChange(plan, newDescription);
  };

  /**
   * Wrap the entire description in <li> tags to make it a bullet line.
   * If you want to bullet only selected text, you can modify this logic.
   */
  const handleBulletLine = (plan) => {
    const currentDescription = pricing[plan]?.description || "";
    // If you want to detect if it's already in <li>, handle that here
    const newDescription = `<li>${currentDescription}</li>`;
    handleDescriptionChange(plan, newDescription);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-200">Pricing Plans</h3>

      {["basic", "standard", "premium"].map((plan) => (
        <div key={plan} className="p-6 bg-[#33373E] rounded-lg shadow-lg mb-8">
          <h4 className="font-semibold text-lg mb-4 capitalize text-gray-300">
            {plan} Plan
          </h4>

          {/* Editable fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["marketPrice", "discountPercentage", "gstPercentage", "governmentFee"].map(
              (field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-400 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    value={
                      pricing[plan]?.[field] === 0 ? "" : pricing[plan]?.[field] || ""
                    }
                    onChange={(e) => handlePricingChange(plan, field, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="any"
                  />
                </div>
              )
            )}
          </div>

          {/* Read-only fields (computed on the server) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {["discountAmount", "gstAmount", "finalPrice"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-400 mb-1 capitalize">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type="number"
                  value={pricing[plan]?.[field] || ""}
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-400"
                  readOnly
                />
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="mt-6">
            <h5 className="font-semibold text-gray-300 mb-3">Description</h5>

            {/* Formatting Buttons */}
            <div className="flex items-center gap-3 mb-2">
              <button
                type="button"
                onClick={() => handleBoldSelection(plan)}
                className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
              >
                Bold
              </button>
              <button
                type="button"
                onClick={() => handleBulletLine(plan)}
                className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
              >
                Bullet
              </button>
            </div>

            <textarea
              ref={(el) => (textAreaRefs.current[plan] = el)}
              value={pricing[plan]?.description || ""}
              onChange={(e) => handleDescriptionChange(plan, e.target.value)}
              placeholder="Enter the description here..."
              className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="w-1/6 bg-blue-700 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-950"
          >
            Update Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
