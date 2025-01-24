import React from "react";

const Features = () => {
  const features = [
    {
      "title": "Company Registration",
      "description": "The primary method through which business owners form or incorporate their firm. Choose the best-suited type of company registration from OPC, Private Limited, LLP, and others.",
      "icon": "🏢"
    },
    {
      "title": "GST Registration",
      "description": "Get a GSTIN for your business. Register for Goods and Services Tax to comply with tax laws and enable smooth business operations.",
      "icon": "🧾"
    },
    {
      "title": "Digital Signature Certificate",
      "description": "Authenticate documents digitally with DSC Class 2 or Class 3. Ensure security, legality, and efficiency for e-signatures.",
      "icon": "🔏"
    },
    {
      "title": "FSSAI Registration",
      "description": "Mandatory for food businesses to ensure compliance with food safety standards. Obtain a 14-digit registration/license number.",
      "icon": "🍴"
    },
    {
      "title": "Trade License",
      "description": "Necessary for operating businesses like cafes, restaurants, or public entertainment establishments. Ensure legal compliance.",
      "icon": "🛠️"
    },
    {
      "title": "ISO Certification",
      "description": "Obtain ISO certification to align business processes with international standards, boost efficiency, and gain customer trust.",
      "icon": "📜"
    },
    {
      "title": "Import Export Code",
      "description": "Mandatory for businesses engaging in international trade. Expand your market reach with a simple, hassle-free registration process.",
      "icon": "🌍"
    },
    {
      "title": "Compliance Services",
      "description": "End-to-end services for TDS filing, GST filing, director changes, LLP agreements, ITR filing, and more.",
      "icon": "✔️"
    },
    {
      "title": "Startup Registration",
      "description": "Get recognized under the Startup India initiative to access tax benefits, IPR fast-tracking, and easier compliance.",
      "icon": "🚀"
    },
    
  ]
  

  return (
    <section className="py-16  dark:bg-gray-900 transition duration-300">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200 uppercase">
  Streamline Your Accounting & Compliance Effortlessly
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
