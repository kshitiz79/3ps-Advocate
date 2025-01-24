import React from "react";

/**
 * Allows creating new main content (heading, paragraphs, subheadings),
 * plus formatting the text (bold, bullet points, font size) the same way
 * as in the edit functionality.
 */
const MainContentSectionAdd = ({ formData, setFormData }) => {
  /**
   * Update the main heading
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

  /**
   * Update paragraphs
   */
  const handleParagraphChange = (index, value) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    updatedParagraphs[index] = value;
    setFormData((prev) => ({
      ...prev,
      mainContent: {
        ...prev.mainContent,
        paragraphs: updatedParagraphs,
      },
    }));
  };

  const addParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      mainContent: {
        ...prev.mainContent,
        paragraphs: [...(prev.mainContent.paragraphs || []), ""],
      },
    }));
  };

  const removeParagraph = (index) => {
    const updatedParagraphs = formData.mainContent.paragraphs.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({
      ...prev,
      mainContent: {
        ...prev.mainContent,
        paragraphs: updatedParagraphs,
      },
    }));
  };

  /**
   * Toggle bold for the user-selected text only
   */
  const toggleBoldText = (index) => {
    const updatedParagraphs = [...(formData.mainContent?.paragraphs || [])];
    const selectedText = window.getSelection().toString();

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
  const handleSubHeadingChange = (field, value) => {
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

  return (
    <div className="p-6 bg-[#33373E] rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-200">
        Main Content (Add)
      </h3>

      {/* Heading Input */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-300 mb-2">Heading</label>
        <input
          type="text"
          value={formData.mainContent?.heading || ""}
          onChange={(e) => handleHeadingChange(e.target.value)}
          placeholder="Main Heading"
          className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200"
        />
      </div>

      {/* Paragraphs Input */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-300 mb-3">
          Paragraphs
        </label>
        {formData.mainContent?.paragraphs?.length > 0 ? (
          formData.mainContent.paragraphs.map((para, index) => (
            <div key={index} className="flex flex-col gap-3 mb-6">
              <textarea
                rows="10"
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

              <button
                type="button"
                onClick={() => removeParagraph(index)}
                className="text-red-500 hover:text-red-400 font-semibold"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">No paragraphs added yet.</p>
        )}

        <button
          type="button"
          onClick={addParagraph}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Paragraph
        </button>
      </div>

      {/* SubHeadings Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 1 Title
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.title1 || ""}
            onChange={(e) => handleSubHeadingChange("title1", e.target.value)}
            placeholder="Subheading 1 Title"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 1 Text
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.text1 || ""}
            onChange={(e) => handleSubHeadingChange("text1", e.target.value)}
            placeholder="Subheading 1 Text"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 2 Title
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.title2 || ""}
            onChange={(e) => handleSubHeadingChange("title2", e.target.value)}
            placeholder="Subheading 2 Title"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-300 mb-2">
            SubHeading 2 Text
          </label>
          <input
            type="text"
            value={formData.mainContent?.subHeadings?.text2 || ""}
            onChange={(e) => handleSubHeadingChange("text2", e.target.value)}
            placeholder="Subheading 2 Text"
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#2A2E35] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentSectionAdd;
