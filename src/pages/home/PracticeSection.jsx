import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import menuItems from "./../../data/MenuData"; // Import the menu data

const PracticeAreas = () => {
  const navigate = useNavigate();

  // Extract main "Business Setup" submenu items to display as practice areas
  const businessSetup = menuItems.find(
    (menu) => menu.name === "Business Setup"
  );

  const areas = businessSetup?.subMenu || []; // Default to an empty array if undefined

  return (
    <div className="py-12 ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 uppercase">
          Our Practice Areas
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Explore our comprehensive range of services designed to support your
          business at every step.
        </p>
      </div>
      <Marquee speed={40} gradient={false} className="overflow-hidden py-5 ">
        <div className="flex flex-wrap justify-center gap-8 py-1 px-5 ">
          {areas.map((area, index) => (
            <div
              key={index}
              onClick={() => navigate(area.path)} // Navigate to the area path on click
              className="w-80 h-auto border border-gray-200 hover:border-blue-500  hover:text-white  rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center text-center p-6 hover:bg-blue-950"
            >
              {/* Placeholder for Image */}
            

              {/* Title */}
              <h3 className="text-lg font-bold  mb-2 ">
                {area.name}
              </h3>
              {/* Description */}
              <p className=" text-sm">
                Explore more about {area.name}.
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PracticeAreas;

