// Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Their legal services are top-notch! Highly recommend them for IP-related needs.",
    },
    {
      name: "Jane Smith",
      feedback: "Professional and responsive. They helped me register my trademark efficiently.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-white border p-6 shadow-md rounded-lg">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-bold mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
