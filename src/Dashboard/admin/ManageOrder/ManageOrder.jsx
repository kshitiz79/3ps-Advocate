import React, { useState } from "react";
import { useGetAllOrdersQuery } from "./../../../redux/features/order/orderApi"; // Import the query hook
import { Search, Loader, AlertCircle } from "lucide-react";

const ManageOrder = () => {
  const { data: orders = [], isLoading, error } = useGetAllOrdersQuery(); // Fetch orders
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.userDetails?.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userDetails?.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userDetails?.userPhone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#33373E] shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-6 flex-col md:flex-row">
        <h1 className="text-2xl font-semibold text-white mb-4 md:mb-0">Manage Orders</h1>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#767E89] text-white placeholder-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A] w-full"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader className="text-gray-300 animate-spin" size={40} />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex justify-center items-center text-red-500">
          <AlertCircle size={20} />
          <span className="ml-2">{error.message || "Error fetching orders"}</span>
        </div>
      )}

      {/* Orders Table */}
      {!isLoading && !error && filteredOrders.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-600 bg-[#2A2E35] rounded-lg shadow-md">
            <thead>
              <tr className="text-gray-300 text-left">
                <th className="px-6 py-3 text-sm font-medium uppercase">#</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Customer Name</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Email</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Phone</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Plan Name</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Plan Type</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Total Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-left">
              {filteredOrders.map((order, index) => (
                <tr key={order._id} className="hover:bg-[#3F454D] transition duration-300">
                  <td className="px-6 py-4 text-sm text-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-200">
                    {order.userDetails?.userName || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {order.userDetails?.userEmail || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {order.userDetails?.userPhone || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {order.cartItems[0]?.name || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {order.cartItems[0]?.plan || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">
                    ₹ {order.totalPrice?.toFixed(2) || "0.00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-4">No orders available.</p>
      )}
    </div>
  );
};

export default ManageOrder;
