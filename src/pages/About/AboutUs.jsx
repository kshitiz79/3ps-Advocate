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
    <div className="flex flex-col md:flex-row items-center gap-20 py-12  shadow-all 
border border-white rounded-lg ">
      {/* Text Content */}
      <div className=" rounded-lg p-8 md:w-1/2 mx-auto">
  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
    Transforming Ideas into Legal Success
  </h3>
  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 text-justify">
    The <span className="font-semibold text-gray-800">3P’s Advocates & IP Attorneys</span> began their journey with a mission to provide unparalleled legal services under the ethos of 
    <span className="font-bold text-gray-900"> “Plea”- “Pledge”- “Pleadings”</span>. 
    We specialize in Intellectual Property Rights and excel in contentious IPR matters, including filings for Patents, Trademarks, and Copyrights.
  </p>
  <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
    Headquartered in New Delhi, our dynamic team of seasoned advocates brings over a decade of expertise in IP law. We’re committed to delivering tailor-made legal solutions aligned with your commercial objectives.
  </p>
  
</div>

      {/* Image */}
      <div className="md:w-2/6 mt-8 md:mt-0">
        <img
          src="./aboutus.png"
          alt="Legal Services"
          className="w-full rounded-lg  "
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
