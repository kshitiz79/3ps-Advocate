// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  const cards = [
    {
      title: "Plea",
      description:
        "Dedicated to representing clients with honesty and diligence, ensuring their voices are heard.",
      skills: ["Client Advocacy", "Legal Consultation", "IP Expertise"],
      image: "/images/plea.jpg", // Replace with the actual image path
    },
    {
      title: "Pledge",
      description:
        "A promise to provide unparalleled service with a focus on trust, transparency, and excellence.",
      skills: ["Commitment", "Ethics", "Transparency"],
      image: "/images/pledge.jpg", // Replace with the actual image path
    },
    {
      title: "Pleadings",
      description:
        "Exceptional skills in drafting and presenting legal arguments for achieving favorable outcomes.",
      skills: ["Drafting Documents", "Court Advocacy", "Dispute Resolution"],
      image: "/images/pleadings.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 uppercase">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Circular Image */}
              <div className="flex justify-center -mt-12">
                <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <h4 className="text-gray-800 font-semibold mb-2 text-left">Skills</h4>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                {card.skills.map((skill, i) => (
                 <li key={i} className="text-left">{skill}</li>
                ))}
              </ul>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
