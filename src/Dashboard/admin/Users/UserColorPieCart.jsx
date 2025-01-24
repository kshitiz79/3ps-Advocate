import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
const UserColorPieCart = () => {
    const userInsightsData = [
        { name: "18-24", value: 18 },
        { name: "25-34", value: 35 },
        { name: "35-44", value: 22 },
        { name: "45-54", value: 12 },
        { name: "55+", value: 13 },
      ];
    
      const COLORS = ["#216B6C", "#2C8182", "#3E9495", "#4DA8A9", "#184D4E"];
    
      return (
        <div className="p-6 px-2">
          <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">User Insights</h1>
          <div>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={userInsightsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {userInsightsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    };

export default UserColorPieCart