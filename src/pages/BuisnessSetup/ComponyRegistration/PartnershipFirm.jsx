import React from 'react'


import References from '../../../components/Cards/References'
import FAQ from '../../../components/FAQ/FaqCompony'
import Form from '../../../components/Form'
import Testimonial from '../../../components/Review/Testemonial'
import MainContent from '../../../components/UI/Discription'
import DocumentsComponent from '../../../components/UI/Doxequired'
import RelatedGuides from '../../../components/UI/RelatedGuide'
import PricingAndDescription from '../../../components/Cards/PricingAndDescription'



const PartnershipFirm = () => {
  return (
    <>
      {/* Use neutral classes so dark mode CSS can take over */}
      <div className="min-h-screen p-4 sm:p-6">
        {/* Heading */}
        <h1 className="text-xs sm:text-3xl font-bold mb-6">
          Company Registration → Partnership Firm
        </h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="w-full lg:flex-1 px-4 sm:px-9 rounded-2xl shadow-all">
            {/* Image */}
            <img
              src="/images.jpg"
              alt="Tag 1"
              className="w-full h-auto rounded shadow-all mb-6 mt-5"
            />

            {/* Cards */}
           <PricingAndDescription/>

            {/* Main Content */}
            <MainContent />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Form />
            <References />
            <RelatedGuides />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="p-4 sm:p-6">
        <DocumentsComponent/>
      </div>
      <FAQ />
      <Testimonial />
    </>
  );
};


export default PartnershipFirm