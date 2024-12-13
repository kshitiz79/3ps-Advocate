import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Patent Registration",
      serviceType: "Basic plan",
      price: 0,
      imageUrl: "https://via.placeholder.com/100", // Replace with actual image
    },
  ];

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto mt-8 p-4">
      <table className="w-full border-collapse border border-gray-200">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left font-semibold border border-gray-200">Name</th>
            <th className="p-3 text-left font-semibold border border-gray-200">Service type</th>
            <th className="p-3 text-left font-semibold border border-gray-200">Price</th>
            <th className="p-3 text-left font-semibold border border-gray-200">Remove</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border border-gray-200">
              <td className="p-3 flex items-center space-x-4 border">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="font-medium">{item.name}</span>
              </td>
              <td className="p-3 border">{item.serviceType}</td>
              <td className="p-3 border">Rs. {item.price.toFixed(2)}</td>
              <td className="p-3 border text-center">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr>
            <td colSpan="2" className="p-3 font-semibold text-right border"></td>
            <td className="p-3 font-semibold text-left border">Total:</td>
            <td className="p-3 font-semibold border">Rs. {totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartPage;
