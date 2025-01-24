import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useSubmitOrderMutation } from "./../../redux/features/order/orderApi"; // Assuming RTK Query is used for orders

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [submitOrder, { isLoading: isSubmitting, isError, error }] =
    useSubmitOrderMutation(); // Using RTK Query mutation for order submission

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      userDetails: formData,
      cartItems: cartItems.map((item) => ({
        id: item.id, // Ensure `id` exists and is sent
        name: item.name,
        price: item.price,
        plan: item.plan,
        imageUrl: item.imageUrl,
      })),
      totalPrice,
    };

    try {
      await submitOrder(orderDetails).unwrap();
      alert("Order submitted successfully!");
      dispatch(clearCart()); // Clear the cart after successful submission
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-gray-600 font-semibold border-b">Name</th>
                <th className="p-4 text-gray-600 font-semibold border-b">Plan</th>
                <th className="p-4 text-gray-600 font-semibold border-b">Price</th>
                <th className="p-4 text-gray-600 font-semibold border-b">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-gray-100 transition duration-300">
                  <td className="p-4 text-gray-800 flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden mr-4">
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/600x300?text=No+Image"}
                        alt={item.name || "Product Image"}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {item.name}
                  </td>
                  <td className="p-4 text-gray-600">{item.plan}</td>
                  <td className="p-4 text-gray-800 font-medium">₹ {item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-20 items-center mt-6">
            <button
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <div className="text-gray-800 text-lg font-bold">Total: ₹ {totalPrice.toFixed(2)}</div>
          </div>
        </div>
      )}

      {/* Form Section */}
      {cartItems.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Checkout Form</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="userName">
                Your Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="userPhone">
                Phone Number
              </label>
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>

            {/* Error Handling */}
            {isError && <p className="text-red-500 mt-4">Error: {error?.data?.message || "Failed to submit order."}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;
