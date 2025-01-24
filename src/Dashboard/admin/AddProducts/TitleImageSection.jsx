import React from "react";

const TitleImageSection = ({ formData, setFormData, handleImageUpload, uploading }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-6 bg-[#33373E] p-6 rounded-lg shadow-lg">
      {/* Title Section */}
      <div>
        <label className="block font-semibold mb-2 text-gray-300">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2A2E35] text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Image Upload Section */}
      <div>
        <label className="block font-semibold mb-2 text-gray-300">
          Upload Image
        </label>

        {uploading && <p className="text-gray-400 mt-2">Uploading...</p>}

        {/* Show preview if image exists */}
        {formData.image && (
          <img
            src={formData.image}
            alt="Uploaded"
            className="w-full h-40 object-cover mt-2 rounded-lg border border-gray-600 shadow-md"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-4 py-2 mt-3 border border-gray-600 rounded-lg bg-[#2A2E35] text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default TitleImageSection;
