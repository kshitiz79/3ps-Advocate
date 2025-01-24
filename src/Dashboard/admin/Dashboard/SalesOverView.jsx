import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { useGetAllOrdersQuery } from "./../../../redux/features/order/orderApi"; // Assuming this is your orders API hook

const SalesOverview = () => {
  // Fetch orders using RTK Query
  const { data: orders = [], isLoading, isError } = useGetAllOrdersQuery();

  // Process orders to group by month
  const salesData = useMemo(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Initialize sales data for each month
    const initialData = months.map((month) => ({ name: month, sales: 0 }));

    // Increment sales count based on order month
    orders.forEach((order) => {
      const orderDate = new Date(order.createdAt); // Assuming orders have a `createdAt` field
      const monthIndex = orderDate.getMonth(); // Get the month index (0-11)
      initialData[monthIndex].sales += 1;
    });

    return initialData;
  }, [orders]);

  return (
    <div className="bg-[#32363E] p-4 md:p-6 lg:p-6 rounded-3xl flex flex-col">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Sales Overview
      </h2>

      {/* Chart */}
      <div className="flex-grow">
        {isLoading ? (
          <p className="text-[#E5E7EB] text-center">Loading...</p>
        ) : isError ? (
          <p className="text-red-500 text-center">Error loading data.</p>
        ) : (
          <ResponsiveContainer width="100%" className="px-0" height={300}>
            <BarChart data={salesData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#32363E",
                  borderColor: "#4B5563",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend wrapperStyle={{ color: "#E5E7EB" }} />
              <Bar
                dataKey="sales"
                fill="#00CEC3"
                radius={[5, 5, 0, 0]}
                barSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default SalesOverview;
