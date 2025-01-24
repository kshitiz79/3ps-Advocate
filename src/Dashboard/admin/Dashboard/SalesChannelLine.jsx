import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Monthly Active Users Data directly defined
const MONTHLY_ACTIVE_USERS = [
  { month: "January", users: 2000 },
  { month: "February", users: 2500 },
  { month: "March", users: 2200 },
  { month: "April", users: 2700 },
  { month: "May", users: 3000 },
  { month: "June", users: 2800 },
  { month: "July", users: 3100 },
  { month: "August", users: 2900 },
  { month: "September", users: 3300 },
  { month: "October", users: 3500 },
  { month: "November", users: 3400 },
  { month: "December", users: 3700 },
];

const SalesChannelLine = () => {
  return (
    <div className="mt-12 ">
      <ResponsiveContainer
        className="bg-[#32363E] px-0 rounded-3xl p-5"
        width="100%"
        height={300}
      >
        <LineChart data={MONTHLY_ACTIVE_USERS}>
          {/* X Axis */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#FFFFFF", fontSize: 14 }}
          />
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#13727A",
              border: "none",
              borderRadius: "1rem",
              padding: "1rem",
            }}
            itemStyle={{ color: "#FFF" }}
          />
          {/* Legend */}
          <Legend wrapperStyle={{ color: "#FFFFFF", fontSize: "14px" }} />
          {/* Line */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#13727A"
            strokeWidth={3}
            dot={{ fill: "#13727A" }}
            name="Monthly Active Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChannelLine;

