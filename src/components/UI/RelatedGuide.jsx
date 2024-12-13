import React from "react";

export default function RelatedGuides() {
  const relatedGuides = [
    { title: "What is Partnership Deed?" },
    { title: "Who is eligible for partnership?" },
    { title: "What is the Registration of a partnership?" },
    { title: "Is an unregistered partnership deed valid in India?" },
    {
      title:
        "What is the Difference Between Partnership & Limited Liability Partnership Firm?",
    },
    { title: "Partnership Firm – Partnership Deed Registration" },
  ];

  return (
    <div className="shadow-lg rounded-lg w-full max-w-sm mx-auto ">

        <div className="p-6 border-gray-200 border">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-start">Related Guides</h3>
      <ul className="space-y-3 text-start">
        {relatedGuides.map((guide, index) => (
          <li
            key={index}
            className="text-blue-600  cursor-pointer text-sm border-b pb-3"
          >
            {guide.title}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
