import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserGrowthLineCh = () => {
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

  return (
    <div className="p-6 px-2">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">User Growth</h1>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={userGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthLineCh;