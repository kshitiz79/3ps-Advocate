import React from "react";
import StarRating from "./StarRating";



const ReviewCard = ({ name, rating, date, review }) => {
  return (
    <div className="p-4 border rounded-xl  max-w-md  shadow-all">
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <StarRating rating={rating} />
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewCard;
