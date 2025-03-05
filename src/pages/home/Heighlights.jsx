import React from "react";

const Highlights = ({ isDarkMode }) => {
  const features = [
    {
      title: " Experts",
      image: "/Flat/flat6.png",
      darkImage: "/Flat/flat6-dark.png",
    },
    {
      title: "4.9* Google Rating",
      image: "/Flat/flat7.png",
      darkImage: "/Flat/flat7-dark.png",
    },
    {
      title: "24/7 Assistance",
      image: "/Flat/flat8.png",
      darkImage: "/Flat/flat8-dark.png",
    },
    {
      title: "Quick and Easy Process",
      image: "/Flat/flat9.png",
      darkImage: "/Flat/flat9-dark.png",
    },
    {
      title: "Complete Online Process",
      image: "/Flat/flat10.png",
      darkImage: "/Flat/flat10-dark.png",
    },
    {
      title: "Secure & Reliable",
      image: "/Flat/flat11.png",
      darkImage: "/Flat/flat11-dark.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2
          className={`text-3xl font-bold text-center  ${
            isDarkMode ? "text-gray-100" : "text-gray-800 uppercase"
          } mb-12`}
        >
          Why Choose Us?
        </h2>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <img
                  src={isDarkMode ? feature.darkImage : feature.image}
                  alt={feature.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                } font-semibold text-base sm:text-lg`}
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
