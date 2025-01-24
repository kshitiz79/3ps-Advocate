import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import PricingAndDescription from "../../../components/Cards/PricingAndDescription";
import MainContent from "../../../components/UI/Discription";
import Form from "../../../components/Form";
import References from "../../../components/Cards/References";
import RelatedGuides from "../../../components/UI/RelatedGuide";
import FAQ from "../../../components/FAQ/FaqCompony";
import Testimonial from "../../../components/Review/Testemonial";
import DocumentsComponent from "../../../components/UI/Doxequired";

const  PublicLimited = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    if (data?.success && data.data) {
      console.log("Fetched Data: ", data.data); // Debugging log
      const filteredProduct = data.data.find(
        (product) =>
          product.title?.toLowerCase().trim() ===
          "Public Limited Company".toLowerCase().trim()
      );
      setPageData(filteredProduct);
    }
  }, [data]);

  if (isLoading) {
    return <p className="text-center text-gray-500 mt-10">Loading product data...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error loading data: {error?.data?.message || "Something went wrong"}
      </p>
    );
  }

  if (!pageData) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No product data available for "Public Limited Company".
      </p>
    );
  }

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6">
        <h1 className="text-xs sm:text-3xl font-bold mb-6 text-gray-800">
          Company Registration → {pageData.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:flex-1 px-4 sm:px-9 rounded-2xl shadow-md">
            {/* Image */}
            <img
              src={
                pageData.image?.trim()
                  ? pageData.image
                  : "https://via.placeholder.com/600x300?text=No+Image"
              }
              alt={pageData.title || "Product Image"}
              className="w-full h-auto rounded shadow mb-6 mt-5"
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
        {pageData.documentRequirements && (
          <DocumentsComponent documentRequirements={pageData.documentRequirements} />
        )}
      </div>

      <FAQ />
      <Testimonial />
    </>
  );
};

export default PublicLimited;
