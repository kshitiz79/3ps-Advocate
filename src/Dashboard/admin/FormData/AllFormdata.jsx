import React, { useEffect, useState } from "react";
import { useGetAllFormsQuery } from "./../../../redux/features/form/formapi";
import { Search, Loader, AlertCircle } from "lucide-react";

const AllForms = () => {
  const { data, isLoading, isError, error } = useGetAllFormsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredForms, setFilteredForms] = useState([]);

  // Set initial data and filter when `data` changes
  useEffect(() => {
    if (data?.data) {
      setFilteredForms(data.data); // Access the array under "data"
    }
  }, [data]);

  // Handle search filtering
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const results = data?.data?.filter(
      (form) =>
        form.name.toLowerCase().includes(searchValue) ||
        form.email.toLowerCase().includes(searchValue) ||
        form.phone.toLowerCase().includes(searchValue)
    );

    setFilteredForms(results);
  };

  return (
    <div className="p-6 bg-[#33373E] shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-col md:flex-row">
        <h1 className="text-2xl font-semibold text-white mb-4 md:mb-0">Submitted Forms</h1>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
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
          <span className="ml-2">{error?.data?.message || "Error fetching data."}</span>
        </div>
      )}

      {/* Table */}
      {!isLoading && !isError && filteredForms?.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-600 bg-[#2A2E35] rounded-lg shadow-md">
            <thead>
              <tr className="text-gray-300 text-left">
                <th className="px-6 py-3 text-sm font-medium uppercase">#</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Name</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Email</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">Phone</th>
                <th className="px-6 py-3 text-sm font-medium uppercase">GSTIN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-left">
              {filteredForms.map((form, index) => (
                <tr key={form._id} className="hover:bg-[#3F454D] transition duration-300">
                  <td className="px-6 py-4 text-sm text-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-200">{form.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{form.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{form.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {form.gstin ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-4">No form submissions available.</p>
      )}
    </div>
  );
};

export default AllForms;
