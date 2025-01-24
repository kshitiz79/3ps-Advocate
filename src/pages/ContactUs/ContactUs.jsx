import React from "react";
import Form from "./../../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const ContactUs = () => {
  return (

<>
<section className="p-16">
<div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">Get in Touch</h1>
          <p className="text-lg text-gray-600 ">
            We would love to hear from you! Whether you have a question, <br/> feedback, or need support,
            our team is here to help. Fill out the form or contact us through the details below.
          </p>
        </div>
    <div
      className=" mt-8 flex items-center justify-between bg-cover bg-center py-6 px-6"
    
    >
      <div className="max-w-7xl w-full bg-white bg-opacity-90 shadow-all rounded-lg p-8 space-y-8">
        {/* Header Section */}
       

        <div className="flex flex-col md:flex-row  justify-between  space-y-8 md:space-y-0 md:space-x-12">
          {/* Contact Details Section */}
          <div className="w-full md:w-1/3 space-y-6  px-10 ml-16">
            {/* Address Card */}
            <div className="flex items-center bg-gray-100 p-6 rounded-lg ">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-full shadow-md">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
              </div>
              <div className="ml-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center bg-gray-100 p-6 rounded-lg ">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-full shadow-md">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-xl  "transform={{ rotate: 90 }}  />
              </div>
              <div className="ml-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 93549 68245</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center bg-gray-100 p-6 rounded-lg ">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-full shadow-md">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
              </div>
              <div className="ml-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">info@3psadvocates.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2  rounded-lg ">
            <Form />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            We value your privacy. Your information will be handled with care and will not be shared with
            third parties.
          </p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default ContactUs;
