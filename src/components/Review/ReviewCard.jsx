import React from "react";
import StarRating from "./StarRating";

const ReviewCard = ({ name, rating, date, review }) => {
  return (
    <div className="p-4 md:p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between h-full">
      <h3 className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-100 mb-2 text-center">
        {name}
      </h3>
      <div className="flex justify-center items-center mb-3">
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 text-center">
        {date}
      </p>
      {/* Add truncation or wrapping for long text */}
      <p
        className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-center break-words overflow-hidden line-clamp-6"
        style={{
          wordWrap: "break-word", // Ensures words break properly
        }}
      >
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;
