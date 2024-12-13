import React, { useState } from "react";

const FAQ = () => {
  // Track which FAQ is open. If null, none are open.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is LEDGERS PRO?",
      answer:
        "LEDGERS PRO is a comprehensive platform for managing client finances, compliance, and transactions efficiently."
    },
    {
      question: "How does LEDGERS PRO help in managing client finances?",
      answer:
        "LEDGERS PRO helps maintain client ledgers, statutory compliance records, and daily financial transactions, streamlining your workflow."
    },
    {
      question: "How does LEDGERS PRO enhance productivity?",
      answer:
        "By centralizing data and automating routine tasks, LEDGERS PRO reduces manual work, improves accuracy, and saves valuable time."
    },
    {
      question: "Is the LEDGERS PRO platform scalable for growing client lists?",
      answer:
        "Yes, LEDGERS PRO is cloud-based and can scale as your client base grows, ensuring consistent performance and responsiveness."
    },
    {
      question: "Can LEDGERS PRO assist with compliance requirements?",
      answer:
        "LEDGERS PRO integrates with compliance modules to ensure timely filings, notifications, and record-keeping, making compliance simpler."
    },
    {
      question: "Is the data in LEDGERS PRO secure and confidential?",
      answer:
        "Data security is a priority. LEDGERS PRO uses robust encryption, secure servers, and regular audits to keep data protected."
    },
    {
      question: "What are the benefits of using a unified platform like LEDGERS PRO?",
      answer:
        "A unified platform eliminates the need to juggle multiple tools, providing consistent data, better accuracy, and improved efficiency."
    },
    {
      question: "Is there a dedicated support team for LEDGERS Partner Program?",
      answer:
        "Yes, LEDGERS PRO offers dedicated support to help partners utilize the platform to its fullest potential."
    },
  ];

  return (
    <section className="w-full  sm:px-8 md:px-16 py-12  ">
      <div className="py-10 mb-10 shadow-all  rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">FAQs</h1>
        {/* Use CSS grid for a two-column layout on medium screens and above */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-10 items-start px-4 sm:px-0 ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className=" shadow-all p-6 rounded-lg cursor-pointer transition-all duration-300  border border-white"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="text-base sm:text-lg font-medium text-gray-700 text-start">
                    {faq.question}
                  </p>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-sm sm:text-base text-gray-600 text-start">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
