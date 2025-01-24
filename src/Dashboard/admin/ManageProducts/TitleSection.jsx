import React from "react";

const TitleSection = ({ formData, handleImageUpload, updateNestedField, uploading }) => {
  return (
    <div className="flex flex-col gap-6 bg-[#33373E] p-10 rounded-lg shadow-lg">
      <div>
        <label className="block font-semibold mb-2 text-gray-300">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateNestedField("title", e.target.value)}
          placeholder="Product Title"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2A2E35] text-gray-200 placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-300">Upload Image</label>
        {uploading && <p className="text-gray-400 mt-2">Uploading...</p>}
        {formData.image && (
          <img
            src={formData.image}
            alt="Uploaded"
            className="w-full h-auto object-cover mt-2 rounded-lg border"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2A2E35] text-gray-200"
        />
      </div>
    </div>
  );
};

export default TitleSection;
