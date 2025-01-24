import React, { useState } from "react";

const DocumentsComponent = ({ documentRequirements }) => {
  const [currentDescriptions, setCurrentDescriptions] = useState(
    documentRequirements[0]?.descriptions || []
  );
  const [showAll, setShowAll] = useState(false);

  const handleRightCardClick = (descriptions) => {
    setCurrentDescriptions(descriptions);
    setShowAll(false); // Reset the "show more" state on selection
  };

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const descriptionsToShow = showAll
    ? currentDescriptions
    : currentDescriptions.slice(0, 3);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-6 py-8 px-4 sm:px-8 md:px-10">
        {/* Right Section (Card List) */}
        <div className="flex-1 rounded-lg shadow-all border border-white">
          {documentRequirements.map((item, index) => (
            <div
              key={index}
              onClick={() => handleRightCardClick(item.descriptions)}
              className="flex justify-between items-center p-5 border-b cursor-pointer hover:bg-gray-100"
            >
              <p className="text-sm sm:text-base md:text-base text-[#032845] font-medium text-left">
                {item.title}
              </p>
              <div className="w-8 h-8 flex items-center justify-center bg-[#032845] text-white rounded-full text-sm sm:text-base">
                {item.descriptions.length} {/* Count from descriptions */}
              </div>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="flex-1 rounded-lg shadow-all border border-white">
          <div className="p-6">
            {descriptionsToShow.map((item, index) => (
              <div
                key={index}
                className={`py-4 ${
                  index !== descriptionsToShow.length - 1 ? "border-b" : ""
                }`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-start text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-start leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
            {currentDescriptions.length > 3 && (
              <div className="text-left mt-4">
                <button
                  onClick={handleShowMore}
                  className="text-blue-600 font-medium px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 text-sm sm:text-base"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsComponent;
