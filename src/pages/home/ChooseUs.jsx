
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "We Care About Our Clients",
      description: "Your goals are our priority. We take the time to understand your unique requirements and align our strategies to help you achieve success efficiently and effectively.",
      icon: "✅",
    },
    {
      title: "Quick Response and Cost-Effective Solutions",
      description: "Our team is committed to providing timely responses and delivering solutions that are both efficient and budget-friendly, ensuring you save time and money.",
      icon: "✅",
    },
    {
      title: "Industry-Specific Experts",
      description: "With a team of experienced professionals specializing in various industries, we ensure that you get tailored advice and services that suit your business needs.",
      icon: "✅",
    },
    {
      title: "One-Stop Shop for All Legal Services",
      description: "We provide a comprehensive range of legal services under one roof, simplifying your experience and making it convenient to address all your legal requirements.",
      icon: "✅",
    },
  ];

  return (
    <div className=" py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" border border-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
