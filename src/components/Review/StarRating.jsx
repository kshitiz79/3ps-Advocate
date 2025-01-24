import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`text-lg sm:text-xl ${
            index < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
