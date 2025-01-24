import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGetReviewsQuery, useAddReviewMutation } from "../../redux/features/review/reviewApi";
import ReviewCard from "../Review/ReviewCard";
import gsap from "gsap";
import PostReviewModal from "./PostAReview";

const Testimonial = () => {
  const { data: reviews = [], isLoading, error } = useGetReviewsQuery();
  const [addReview] = useAddReviewMutation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const slideWidth = 25; // Percentage width of a slide (1/4)
  const maxIndex = Math.ceil(reviews.length / 4) - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      gsap.to(sliderRef.current, {
        x: `-=${slideWidth}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop back to the first slide
      gsap.to(sliderRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      gsap.to(sliderRef.current, {
        x: `+=${slideWidth}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop back to the last slide
      gsap.to(sliderRef.current, {
        x: `-${maxIndex * slideWidth}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setCurrentIndex(maxIndex);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddReview = async (newReview) => {
    try {
      const response = await addReview(newReview).unwrap();
      console.log("Review added successfully:", response);
      closeModal();
    } catch (err) {
      console.error("Error adding review:", err);
      alert(err?.data?.message || "Failed to add review");
    }
  };

  useEffect(() => {
    gsap.set(sliderRef.current, { x: "0%" }); // Reset slider position on mount
  }, [reviews]);

  if (isLoading) return <div className="loading-spinner">Loading reviews...</div>;
  if (error) return <p>Error loading reviews: {error.message}</p>;

  return (
    <div className="relative mb-10">
      {/* Top Left Button */}
      <button
        onClick={openModal}
        className="absolute top-0 left-10 mt-2 ml-2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-lg shadow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-transform duration-300 ease-in-out"
      >
        Write a Review
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">User Reviews</h1>

      {/* Reviews Container */}
      <div className="overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex"
          style={{ width: `${(reviews.length / 4) * 100}%` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-1/4 px-4 py-9">
              <ReviewCard
                key={review._id}
                name={review.user?.username || "Anonymous"} // Access the username from the populated user field
                rating={review.rating}
                date={new Date(review.date).toLocaleDateString()}
                review={review.review}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {reviews.length > 4 && (
        <div className="absolute top-3 right-16 flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-2 rounded-full shadow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 ease-in-out"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-2 rounded-full shadow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 ease-in-out"
          >
            <FaArrowRight />
          </button>
        </div>
      )}

      {/* Review Modal */}
      {isModalOpen && (
        <PostReviewModal closeModal={closeModal} onReviewSubmit={handleAddReview} />
      )}
    </div>
  );
};

export default Testimonial;
