import React from "react";
import Marquee from "react-fast-marquee";

const PracticeAreas = () => {
  const areas = [
    { name: "Start Up", image: "./2.jpg" },
    { name: "MSME", image: "./2.jpg" },
    { name: "Trade License", image: "./2.jpg" },
    { name: "FSSAI", image: "./2.jpg" },
    { name: "Compliance", image: "./2.jpg" },
    { name: "Company Registration", image: "./2.jpg" },
    { name: "GST Registration", image: "./2.jpg" },
  ];

  return (
    <section className="py-12 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">Our Practice Areas</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Explore our comprehensive range of services designed to support your business at every step.
        </p>
      </div>
      <Marquee speed={40} gradient={false} className="overflow-hidden py-5">
      <div className="flex flex-wrap justify-center gap-8 px-5">
  {areas.map((area, index) => (
    <div
      key={index}
      className="w-80 h-auto border border-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center text-center p-6"
    >
      {/* Image Section */}
      <div >
      <h3 className="text-lg font-bold text-gray-800 mb-2">{area.name}</h3>
      </div>

      {/* Title */}


      {/* Description */}
      <p className="text-gray-600 text-sm">{area.description}</p>
    </div>
  ))}
</div>
      </Marquee>
    </section>
  );
};

export default PracticeAreas;
