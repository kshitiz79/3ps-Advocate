import React from "react";

const DocRequiredSection = ({ formData, setFormData }) => {
  const handleAddRequirement = () => {
    const newRequirement = {
      title: "",
      descriptions: [{ title: "", desc: "" }],
    };
    setFormData((prev) => ({
      ...prev,
      documentRequirements: [...(prev.documentRequirements || []), newRequirement],
    }));
  };

  const handleRemoveRequirement = (index) => {
    setFormData((prev) => ({
      ...prev,
      documentRequirements: prev.documentRequirements.filter((_, i) => i !== index),
    }));
  };

  const handleChangeRequirement = (index, field, value) => {
    setFormData((prev) => {
      const updatedRequirements = [...prev.documentRequirements];
      updatedRequirements[index][field] = value;
      return { ...prev, documentRequirements: updatedRequirements };
    });
  };

  const handleChangeDescription = (requirementIndex, descIndex, field, value) => {
    setFormData((prev) => {
      const updatedRequirements = [...prev.documentRequirements];
      updatedRequirements[requirementIndex].descriptions[descIndex][field] = value;
      return { ...prev, documentRequirements: updatedRequirements };
    });
  };

  const handleAddDescription = (requirementIndex) => {
    setFormData((prev) => {
      const updatedRequirements = [...prev.documentRequirements];
      updatedRequirements[requirementIndex].descriptions.push({ title: "", desc: "" });
      return { ...prev, documentRequirements: updatedRequirements };
    });
  };

  const handleRemoveDescription = (requirementIndex, descIndex) => {
    setFormData((prev) => {
      const updatedRequirements = [...prev.documentRequirements];
      updatedRequirements[requirementIndex].descriptions.splice(descIndex, 1);
      return { ...prev, documentRequirements: updatedRequirements };
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Document Requirements</h2>

      {formData.documentRequirements &&
        formData.documentRequirements.map((requirement, reqIndex) => (
          <div key={reqIndex} className="mb-6">
            <div className="flex gap-4 items-center mb-2 text-black">
              <input
                type="text"
                className="flex-1 border rounded p-2"
                placeholder="Requirement Title"
                value={requirement.title}
                onChange={(e) => handleChangeRequirement(reqIndex, "title", e.target.value)}
              />
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => handleRemoveRequirement(reqIndex)}
              >
                Remove
              </button>
            </div>

            <div className="ml-4 text-black">
              <h3 className="text-md font-semibold mb-2">Descriptions</h3>
              {requirement.descriptions.map((description, descIndex) => (
                <div key={descIndex} className="flex gap-4 items-center mb-2">
                  <input
                    type="text"
                    className="flex-1 border rounded p-2"
                    placeholder="Description Title"
                    value={description.title}
                    onChange={(e) =>
                      handleChangeDescription(reqIndex, descIndex, "title", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="flex-1 border rounded p-2"
                    placeholder="Description"
                    value={description.desc}
                    onChange={(e) =>
                      handleChangeDescription(reqIndex, descIndex, "desc", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={() => handleRemoveDescription(reqIndex, descIndex)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                onClick={() => handleAddDescription(reqIndex)}
              >
                Add Description
              </button>
            </div>
          </div>
        ))}

      <button
        type="button"
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleAddRequirement}
      >
        Add New Requirement
      </button>
    </div>
  );
};

export default DocRequiredSection;
