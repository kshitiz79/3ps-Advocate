import React, { useState } from "react";
import { useSubmitFormMutation } from "./../redux/features/form/formapi"; // Replace with actual API slice path
import GooglePlayIcon from "./../../public/contact.png"; // Adjust path as needed

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gstin: false,
  });

  const [submitForm, { isLoading, isError, isSuccess, error }] = useSubmitFormMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData).unwrap();
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", gstin: false }); // Reset form
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg rounded-lg w-full max-w-sm border border-gray-200">
        {/* Image Section */}
        <div>
          <img
            src={GooglePlayIcon}
            alt="Google Play"
            className="w-full h-40 object-cover rounded-t-lg"
          />
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4 flex">
              <div className="flex items-center px-3  border border-r-0 rounded-l-lg">
                <span className="text-gray-500">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-r-lg border-l-lg border-r-0 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* GSTIN Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="gstin"
                checked={formData.gstin}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="gstin" className="ml-2 text-sm text-gray-700">
                Enter GSTIN to get 18% GST Credit
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Get Started"}
            </button>

            {/* Success and Error Messages */}
            {isSuccess && (
              <p className="text-green-600 text-center mt-4">Form submitted successfully!</p>
            )}
            {isError && (
              <p className="text-red-600 text-center mt-4">
                Error: {error?.data?.message || "Something went wrong"}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
