import React, { useRef } from "react";

const PricingPlansSection = ({ formData, setFormData }) => {
  /**
   * Refs to store references to each description textarea:
   * {
   *   basic: [refForDesc0, refForDesc1, ...],
   *   standard: [...],
   *   premium: [...]
   * }
   */
  const textAreaRefs = useRef({
    basic: [],
    standard: [],
    premium: [],
  });

  /**
   * Handle changes to numeric fields within each pricing plan
   */
  const handlePricingChange = (plan, field, value) => {
    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          // Convert string input to float; fallback to 0 if invalid
          [field]: value === "" ? "" : parseFloat(value) || 0,
        },
      },
    }));
  };

  /**
   * Handle changes to description fields (array of strings)
   */
  const handleDescriptionChange = (plan, index, newValue) => {
    const newDescriptions = [...formData.pricing[plan].description];
    newDescriptions[index] = newValue;

    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          description: newDescriptions,
        },
      },
    }));
  };

  /**
   * Add a description field
   */
  const addDescriptionField = (plan) => {
    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          description: [...prev.pricing[plan].description, ""],
        },
      },
    }));
  };

  /**
   * Remove a description field
   */
  const removeDescriptionField = (plan, index) => {
    const updatedDescriptions = formData.pricing[plan].description.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [plan]: {
          ...prev.pricing[plan],
          description: updatedDescriptions,
        },
      },
    }));
  };

  /**
   * Wrap selected text in <b></b>
   */
  const handleBoldSelection = (plan, index) => {
    const textarea = textAreaRefs.current[plan][index];
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    if (selectionStart === selectionEnd) {
      // No text selected; do nothing or handle differently
      return;
    }

    const before = value.substring(0, selectionStart);
    const selectedText = value.substring(selectionStart, selectionEnd);
    const after = value.substring(selectionEnd);

    // Wrap the selection in <b> tags
    const newValue = `${before}<b>${selectedText}</b>${after}`;
    handleDescriptionChange(plan, index, newValue);
  };

  /**
   * Wrap the entire line in <li></li>
   * (For simplicity, we do not detect if it’s already in <li>.)
   */
  const handleBulletLine = (plan, index) => {
    const currentText = formData.pricing[plan].description[index] || "";
    // If it’s already in <li>, you might want to remove or handle differently
    const newValue = `<li>${currentText}</li>`;
    handleDescriptionChange(plan, index, newValue);
  };

  return (
    <>
      <h3 className="text-2xl font-bold mb-6 text-gray-200">Pricing Plans</h3>

      {["basic", "standard", "premium"].map((plan) => {
        const planData = formData.pricing[plan] || {};

        // Ensure we have an array for textAreaRefs
        if (!textAreaRefs.current[plan]) {
          textAreaRefs.current[plan] = [];
        }

        return (
          <div key={plan} className="p-6 bg-[#33373E] rounded-lg shadow-lg mb-8">
            {/* Plan Title */}
            <h4 className="font-semibold text-lg mb-4 capitalize text-gray-300">
              {plan} Plan
            </h4>

            {/* Editable Pricing Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["marketPrice", "discountPercentage", "gstPercentage", "governmentFee"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize text-gray-400 mb-1">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                    value={planData[field] === 0 ? "" : planData[field] || ""}
                    onChange={(e) => handlePricingChange(plan, field, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    min="0"
                    step="any"
                  />
                </div>
              ))}
            </div>

            {/* Read-Only Pricing Fields (computed on backend) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {["discountAmount", "gstAmount", "finalPrice"].map((computedField) => (
                <div key={computedField}>
                  <label className="block text-sm font-medium capitalize text-gray-400 mb-1">
                    {computedField.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    value={planData[computedField] || 0}
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-400"
                    readOnly
                  />
                </div>
              ))}
            </div>

            {/* Pricing Descriptions */}
            <div className="mt-6">
              <h5 className="font-semibold text-gray-300 mb-3">Description</h5>
              {planData.description?.map((desc, index) => {
                // Create a ref for each description
                if (!textAreaRefs.current[plan][index]) {
                  textAreaRefs.current[plan][index] = null;
                }

                return (
                  <div key={index} className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      {/* Bold & Bullet Buttons */}
                      <button
                        type="button"
                        onClick={() => handleBoldSelection(plan, index)}
                        className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
                      >
                        Bold
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulletLine(plan, index)}
                        className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
                      >
                        Bullet
                      </button>
                      <button
                        type="button"
                        onClick={() => removeDescriptionField(plan, index)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <textarea
                      ref={(el) => (textAreaRefs.current[plan][index] = el)}
                      rows={3}
                      placeholder={`Description ${index + 1}`}
                      value={desc}
                      onChange={(e) => handleDescriptionChange(plan, index, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => addDescriptionField(plan)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                + Add Description
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PricingPlansSection;
