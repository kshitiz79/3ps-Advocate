import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

// User Growth Data directly defined
const userGrowthData = [
  { month: "Jan", users: 0 },
  { month: "Feb", users: 0 },
  { month: "Mar", users: 0 },
  { month: "Apr", users: 0 },
  { month: "May", users: 0 },
  { month: "Jun", users: 0 },
  { month: "Jul", users: 0 },
  { month: "Aug", users: 0 },
  { month: "Sep", users: 0 },
  { month: "Oct", users: 0 },
  { month: "Nov", users: 0 },
  { month: "Dec", users: 0 },
];

const UserAreaView = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" className="p-0" height={80}>
        <AreaChart data={userGrowthData}>
          <Tooltip
            contentStyle={{ backgroundColor: "transparent", border: "none" }}
            itemStyle={{ color: "#FFF" }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#00CEC3"
            fill="#356F71"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAreaView;
