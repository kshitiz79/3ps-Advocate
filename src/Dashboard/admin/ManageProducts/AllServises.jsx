import React, { useState, useEffect } from "react";
import { useGetProductsQuery,useDeleteProductMutation } from "../../../redux/features/product/productApi";
import { Edit, Search, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllServises = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();
  // Filter products when data is loaded
  useEffect(() => {
    if (data?.data) {
      setFilteredItems(data.data);
    }
  }, [data]);

  // Handle search filtering
  const handleFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchItem(searchValue);
    const filteredResults = data?.data?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue) ||
        item.mainContent.heading.toLowerCase().includes(searchValue)
    );
    setFilteredItems(filteredResults);
  };


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
        setFilteredItems((prevItems) => prevItems.filter((item) => item._id !== id));
        alert("Product deleted successfully.");
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Failed to delete product.");
      }
    }
  };



  const handleEdit = (id) => {
    navigate(`/admin-dashboard/update-services/${id}`); // Navigate to UpdateService page with ID
  };
  if (isLoading) {
    return <p className="text-center text-gray-400 mt-10">Loading products...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-400 mt-10">
        Error loading products: {error?.data?.message || "Something went wrong"}
      </p>
    );
  }

  return (
    <div className="mx-1">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 flex-col md:flex-row bg-[#33373E] rounded-lg shadow-md">
        <h2 className="text-white text-2xl font-semibold tracking-tighter text-center">
          Product List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleFilter}
            value={searchItem}
            className="bg-[#767E89] text-white placeholder-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A]"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-[#33373E] mt-6 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#2A2E35] text-gray-300">
            <tr>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Image
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Title
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Basic Plan
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Standard Plan
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Premium Plan
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredItems.map((product) => (
              <tr
                key={product._id}
                className="hover:bg-[#3F454D] transition duration-300"
              >
                {/* Image Column */}
                <td className="px-6 py-4 text-sm text-gray-200 text-left">
                  <img
                    src={
                      product.image?.trim()
                        ? product.image
                        : "https://via.placeholder.com/50x50?text=No+Image"
                    }
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>

                {/* Title Column */}
                <td className="px-6 py-4 text-sm text-gray-200 font-medium text-left">
                  {product.title}
                </td>

                {/* Pricing Columns */}
                <td className="px-6 py-4 text-sm text-gray-300">
                  ₹{product.pricing?.basic?.finalPrice || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  ₹{product.pricing?.standard?.finalPrice || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  ₹{product.pricing?.premium?.finalPrice || "N/A"}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-sm text-gray-300 flex gap-3 mt-[14px]">
                <button
                    className="text-[#7ab3b9] hover:text-[#3FA7B5]"
                    onClick={() => handleEdit(product._id)} // Call handleEdit function
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => handleDelete(product._id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServises;
