import React from "react";
import Marquee from "react-fast-marquee";
const AboutUs = () => {
  return (
    <div className="min-h-screen">
   <section className=" py-16 ">
  <div className=" mx-auto px-8 lg:px-16">
    <div className="text-center mb-12 ">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
        About Us
      </h2>
      <p className="mt-4 text-lg lg:text-xl text-gray-600">
        Creative Solutions for Legal Problems
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-20 py-12 h shadow-all 
border border-white rounded-lg  ">
      {/* Text Content */}
      <div className=" rounded-lg px-8 py-3 md:w-4/6 mx-auto">
  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10 text-center">
    Transforming Ideas into  <br/>Legal Success
  </h3>
  
  <p className="text-gray-600 text-base lg:text-base leading-relaxed text-justify">
  The 3P’s Advocates & IP Attorneys has started their journey with a motive to serve best to their client through the motto of  <span className="font-bold text-gray-900"> “Plea”- “Pledge”- “Pleadings”</span>.  and have focussed their primary practice area in the field of Intellectual Property Rights and have been involved in handling contentious IPR matters, with a vast number of filings in Patents, Trademarks, and Copyrights. 

The 3P’s Advocates & IP Attorneys is a full-service Law Firm having its head office in the capital city New Delhi and has started its operations with an energetic team of dynamic Advocates holding experiences of over 10+ years in IP practice.

We advise and guide global clients at various stages of IP life-cycle vis-à-vis searching, filing, prosecution, opposition, show cause hearings, and other stages of litigation. We have been assisting global clients in formulating Intellectual property-related strategies, settling negotiations, enforcing and procurement of IP rights, managing IP Transactions, and monetizing.

The firm is managed by six experienced professionals and over ten associates having diverse domain expertise and represent matters before various Patent Offices, Trade Mark Registries, and at all levels of Courts (District Courts, High Courts, and the Supreme Court).

We believe in providing customized solutions to our clients and a comprehensive understanding of the needs to meet the commercial goals.
  </p>
  
</div>

      {/* Image */}
      <div className="md:w-2/6 mt-8 md:mt-0 ">
  <img
    src="./aboutus.png"
    alt="Legal Services"
    className="w-5/6 rounded-full lg:ml-7 "
  />
</div>

    </div>
  </div>
</section>


<section className="py-16 text-shadow-2xl">
      <div className=" mx-auto ">
      <h2
  className="text-4xl font-bold text-gray-800 mb-6 relative"


>
  Why Choose Us?
</h2>




        
        <Marquee gradient={false} speed={50}>
          <div className="flex space-x-8 px-3 py-11" >
          <div className="p-6 border rounded-lg border-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-rotate-3 hover:scale-105">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Client-Focused</h3>
  <p className="text-gray-600">
    We care about our clients. Your goal is our goal.
  </p>
</div>


<div className="p-6 border rounded-lg border-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-rotate-3 hover:scale-100">
              <h3 className="text-xl font-bold  mb-4">Quick & Cost-Effective</h3>
              <p >
                Our services are designed to save you time and money.
              </p>
            </div>
            <div className="p-6 border rounded-lg border-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-rotate-3 hover:scale-105">
              <h3 className="text-xl font-bold  mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Work with experts who specialize in your industry.
              </p>
            </div>
            <div className="p-6 border rounded-lg border-white  shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-rotate-3 hover:scale-105">
              <h3 className="text-xl font-bold  mb-4">Confidential & Ethical</h3>
              <p >
                We prioritize confidentiality and maintain high ethical
                standards.
              </p>
            </div>
            <div className="p-6 border rounded-lg border-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-rotate-3 hover:scale-105">
              <h3 className="text-xl font-bold mb-4">Full-Service Firm</h3>
              <p className="text-gray-600">
                Your one-stop destination for all legal services.
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </section>




    
    
    </div>
  );
};

export default AboutUs;
