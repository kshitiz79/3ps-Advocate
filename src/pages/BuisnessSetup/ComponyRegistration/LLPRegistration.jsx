import React from 'react';
import data from './../../../../data/data.json';

import References from '../../../components/Cards/References';
import FAQ from '../../../components/FAQ/FaqCompony';
import Form from '../../../components/Form';
import Testimonial from '../../../components/Review/Testemonial';
import MainContent from '../../../components/UI/Discription';
import DocumentsComponent from '../../../components/UI/Doxequired';
import RelatedGuides from '../../../components/UI/RelatedGuide';
import PricingAndDescription from '../../../components/Cards/PricingAndDescription';

const LLPRegistration = () => {
  console.log(data); 
console.log(data.privateLimitedCompany)
  const pageData = data.llpRegistration; 


  return (
    <>
      <div className="min-h-screen p-4 sm:p-6">
        <h1 className="text-xs sm:text-3xl font-bold mb-6">
          Company Registration → LLP Registration
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:flex-1 px-4 sm:px-9 rounded-2xl shadow-all">
            {/* Image */}
            <img
              src={pageData.image}
              alt="Tag 1"
              className="w-full h-auto rounded shadow-all mb-6 mt-5"
            />

            {/* Pricing and Description Cards */}
            <PricingAndDescription pageData={pageData} />

            {/* Main Content */}
            <MainContent mainContent={pageData.mainContent} />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Form />
            <References />
            <RelatedGuides />
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <DocumentsComponent/>
      </div>
      <FAQ />
      <Testimonial />
    </>
  );
};





export default LLPRegistration