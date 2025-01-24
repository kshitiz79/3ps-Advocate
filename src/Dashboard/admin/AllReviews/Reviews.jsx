import React, { useEffect, useState } from 'react';
import { useGetReviewsQuery, useDeleteReviewMutation } from './../../../redux/features/review/reviewApi';
import { Search, Loader, AlertCircle, Trash } from 'react-feather';

const Reviews = () => {
  const { data: reviews, isLoading, isError, error } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    if (reviews) {
      const filtered = reviews.filter((review) =>
        `${review.user.username} ${review.review} ${review.rating}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredReviews(filtered);
    }
  }, [searchTerm, reviews]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await deleteReview(id).unwrap();
        setFilteredReviews((prevReviews) =>
          prevReviews.filter((review) => review._id !== id)
        );
        alert("Review deleted successfully.");
      } catch (error) {
        console.error("Failed to delete review:", error);
        if (error.status === 403) {
          alert("You are not authorized to delete this review.");
        } else if (error.status === 404) {
          alert("Review not found.");
        } else {
          alert("An error occurred. Please try again.");
        }
      }
    }
  };
  
  
  
  
  return (
    <div className="p-6  shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-col md:flex-row">
        <h1 className="text-2xl font-semibold text-white mb-4 md:mb-0">Reviews</h1>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by username, review, or rating..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-[#767E89] text-white placeholder-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A] w-full"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader className="text-gray-300 animate-spin" size={40} />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="flex justify-center items-center text-red-500">
          <AlertCircle size={20} />
          <span className="ml-2">{error?.data?.message || 'Error fetching reviews.'}</span>
        </div>
      )}

      {/* Table */}
      {!isLoading && !isError && filteredReviews.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-600 bg-[#2A2E35] rounded-lg shadow-md">
            <thead>
              <tr className="text-gray-300 text-left">
                <th className="px-6 py-3 text-sm font-medium uppercase">#</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Username</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Review</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Rating</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-left">
              {filteredReviews.map((review, index) => (
                <tr
                  key={review._id}
                  className="hover:bg-[#3F454D] transition duration-300"
                >
                  <td className="px-6 py-4 text-sm text-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-200">
                    {review.user?.username || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {review.review}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{review.rating}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-500 hover:text-red-700 transition duration-200"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-4">No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
