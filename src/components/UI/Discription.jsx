import React from "react";

/**
 * Displays the Main Content as HTML. 
 * Safely handles cases where the data might be missing.
 */
const MainContent = ({ mainContent }) => {
  // Destructure with fallbacks
  const {
    heading = "No Title Available",
    paragraphs = [],
    subHeadings = {},
  } = mainContent || {};

  return (
    <div className="p-6 rounded-lg mb-10 shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h1>

      {/* Render paragraphs */}
      {paragraphs.length > 0 ? (
        paragraphs.map((para, index) => (
    
          <div
          
          key={index}
          className="text-gray-600 leading-relaxed mb-4 text-start"
          // Insert <br> for every \n, keep the existing HTML tags intact
          dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, "<br>") }}
        />
          
        ))
      ) : (
        <p className="text-gray-500 italic">No content available.</p>
      )}

      {/* Render Subheadings */}
      {subHeadings.title1 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-2 text-start">
            {subHeadings.title1}
          </h2>
          <p className="text-gray-600 leading-relaxed text-start">
            {subHeadings.text1}
          </p>
        </>
      )}

      {subHeadings.title2 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-2 text-start">
            {subHeadings.title2}
          </h2>
          <p className="text-gray-600 leading-relaxed text-start">
            {subHeadings.text2}
          </p>
        </>
      )}
    </div>
  );
};

export default MainContent;
