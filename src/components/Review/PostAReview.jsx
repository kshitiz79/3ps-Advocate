import React, { useState } from 'react';

const PostReviewModal = ({ closeModal, onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !review.trim()) {
      alert('Please provide a rating and a review.');
      return;
    }

    const newReview = { rating, review };
    if (onReviewSubmit) {
      onReviewSubmit(newReview); // Ensure this is called only if defined
    } else {
      console.error('onReviewSubmit is not defined');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2"
              required
            >
              <option value={0}>Select rating</option>
              {[1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>
                  {val} Star{val > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="py-2 px-4 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReviewModal;
