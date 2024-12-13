import React from "react";

const Features = () => {
  const features = [
    {
      title: "Billing & Invoicing",
      description:
        "Empower your sales teams to easily create estimates and invoices. Track invoice delivery and opens by customers.",
      icon: "📄", // Replace this with any SVG or icon library
    },
    {
      title: "GST Return Filing",
      description:
        "Integrated GST solution to help businesses manage their invoicing, GST Invoicing, Payment Reconciliation and GST Filing on a single platform.",
      icon: "🧾",
    },
    {
      title: "HR & Payroll",
      description:
        "Comprehensive HR cloud-based suite to manage all aspects of employee management like onboarding, attendance, payroll, compliance, and exit.",
      icon: "👥",
    },
    {
      title: "GST e-Invoicing",
      description:
        "Scalable GST eInvoice stack with integrated payment links and powerful reconciliation features.",
      icon: "🚀",
    },
    {
      title: "Financial Statements",
      description:
        "Streamline your finances effortlessly and make quicker decisions with powerful financial reports on demand.",
      icon: "📊",
    },
    {
      title: "Invoice & Collect",
      description:
        "Get a payment gateway for your business and accept credit card, debit card, netbanking and UPI payments seamlessly.",
      icon: "💰",
    },
    {
      title: "Connected Banking",
      description:
        "Access your business bank account from LEDGERS and simplify banking.",
      icon: "🏦",
    },
    {
      title: "Android & iOS App",
      description:
        "Keep accounting and financial information at your fingertips. Send estimates, invoices, and collect payments from anywhere.",
      icon: "📱",
    },
    {
      title: "Employee Attendance",
      description:
        "Switch to a facial recognition-based attendance solution with geolocation tracking features.",
      icon: "✅",
    },
  ];

  return (
    <section className="py-16  dark:bg-gray-900 transition duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Cloud Accounting & Compliance Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border border-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-3xl text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
