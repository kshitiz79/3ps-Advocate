import React from "react";

const MainContent = ({ mainContent }) => {
  const { heading, paragraphs, subHeadings } = mainContent;

  return (
    <div className="flex-1 p-6 rounded-lg shadow-all mb-10 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {heading}
      </h1>
      {paragraphs.map((para, index) => (
        <p key={index} className="text-gray-600 leading-relaxed mb-4 text-start">
          {para}
        </p>
      ))}
      <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2 text-start">
        {subHeadings.title1}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4 text-start">
        {subHeadings.text1}
      </p>
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-start">
        {subHeadings.title2}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4 text-start">
        {subHeadings.text2}
      </p>
    </div>
  );
};

export default MainContent;
