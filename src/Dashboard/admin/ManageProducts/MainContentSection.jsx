import React from "react";

const MainContentSectionEdit = ({ formData, setFormData }) => {
  /**
   * Update paragraph text
   */
  const handleParagraphChange = (index, value) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    updatedParagraphs[index] = value;
    setFormData((prev) => ({
      ...prev,
      mainContent: { ...prev.mainContent, paragraphs: updatedParagraphs },
    }));
  };

  /**
   * Toggle bold for the user-selected text only
   */
  const toggleBoldText = (index) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    const selectedText = window.getSelection().toString();

    // Only proceed if the user has some text selected
    if (selectedText) {
      const boldText = `<b>${selectedText}</b>`;
      updatedParagraphs[index] = updatedParagraphs[index].replace(
        selectedText,
        boldText
      );

      setFormData((prev) => ({
        ...prev,
        mainContent: { ...prev.mainContent, paragraphs: updatedParagraphs },
      }));
    }
  };

  /**
   * Toggle bullet points for the user-selected text only
   */
  const togglePoints = (index) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    const selectedText = window.getSelection().toString();

    // Only proceed if the user has some text selected
    if (selectedText) {
      // Wrap the selected text in <ul><li> ... </li></ul>
      const bulletText = `<ul><li>${selectedText
        .split("\n")
        .join("</li><li>")}</li></ul>`;

      updatedParagraphs[index] = updatedParagraphs[index].replace(
        selectedText,
        bulletText
      );

      setFormData((prev) => ({
        ...prev,
        mainContent: { ...prev.mainContent, paragraphs: updatedParagraphs },
      }));
    }
  };

  /**
   * Change font size for the user-selected text only
   */
  const changeFontSize = (index, sizeClass) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    const selectedText = window.getSelection().toString();

    // Only proceed if the user has some text selected
    if (selectedText) {
      const sizedText = `<span class="${sizeClass}">${selectedText}</span>`;
      updatedParagraphs[index] = updatedParagraphs[index].replace(
        selectedText,
        sizedText
      );

      setFormData((prev) => ({
        ...prev,
        mainContent: { ...prev.mainContent, paragraphs: updatedParagraphs },
      }));
    }
  };

  /**
   * Update subheadings
   */
  const handleSubheadingChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      mainContent: {
        ...prev.mainContent,
        subHeadings: {
          ...prev.mainContent.subHeadings,
          [field]: value,
        },
      },
    }));
  };

  /**
   * Update main heading
   */
  const handleHeadingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      mainContent: {
        ...prev.mainContent,
        heading: value,
      },
    }));
  };

  return (
    <div className="p-6 bg-[#33373E] rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-200">
        Main Content (Edit)
      </h3>

      {/* Heading Input */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-300 mb-2">
          Heading
        </label>
        <input
          type="text"
          value={formData.mainContent?.heading || ""}
          onChange={(e) => handleHeadingChange(e.target.value)}
          placeholder="Main Heading"
          className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
        />
      </div>

      {/* Paragraphs */}
      {formData.mainContent?.paragraphs?.map((para, index) => (
        <div key={index} className="flex flex-col gap-3 mb-6">
          <textarea
            rows="17"
            value={para}
            onChange={(e) => handleParagraphChange(index, e.target.value)}
            placeholder={`Paragraph ${index + 1}`}
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
          />

          {/* Formatting Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => toggleBoldText(index)}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Bold
            </button>
            <button
              type="button"
              onClick={() => togglePoints(index)}
              className="px-3 py-1 bg-green-600 text-white rounded-lg font-semibold"
            >
              Points
            </button>
            <select
              defaultValue="text-base"
              onChange={(e) => changeFontSize(index, e.target.value)}
              className="px-3 py-1 bg-gray-700 text-white rounded-lg"
            >
              <option value="text-sm">Small</option>
              <option value="text-base">Normal</option>
              <option value="text-lg">Large</option>
              <option value="text-xl">Extra Large</option>
            </select>
          </div>
        </div>
      ))}

      {/* SubHeadings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 1 Title
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.title1 || ""}
            onChange={(e) => handleSubheadingChange("title1", e.target.value)}
            placeholder="Subheading 1 Title"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 1 Text
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.text1 || ""}
              
            onChange={(e) => handleSubheadingChange("text1", e.target.value)}
            placeholder="Subheading 1 Text"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 2 Title
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.title2 || ""}
            onChange={(e) => handleSubheadingChange("title2", e.target.value)}
            placeholder="Subheading 2 Title"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 2 Text
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.text2 || ""}
            onChange={(e) => handleSubheadingChange("text2", e.target.value)}
            placeholder="Subheading 2 Text"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentSectionEdit;
