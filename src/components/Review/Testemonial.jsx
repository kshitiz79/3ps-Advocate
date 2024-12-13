import React, { useState } from "react";
import ReviewCard from "../Review/ReviewCard";
// import PostAReview from "../Review/PostAReview";

const Testimonial = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Andy Wirth",
      rating: 5,
      date: "April 12, 2022",
      review:
        "Since leaving university, I was completely lost in what I should be doing in terms of sorting out finances.",
    },
  ]);

  const addReview = () => {
    const newReview = {
      name: "New User",
      rating: 4,
      date: new Date().toLocaleDateString(),
      review: "This is a newly posted review!",
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="p-6 px-16">
      <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
      <div className="space-y-4">
        {reviews.map((r, index) => (
          <ReviewCard
            key={index}
            name={r.name}
            rating={r.rating}
            date={r.date}
            review={r.review}
          />
        ))}
      </div>
      <div className="mt-6">
        {/* <PostAReview onClick={addReview} /> */}
      </div>
    </div>
  );
};

export default Testimonial;
