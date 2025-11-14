import React from 'react';
import { useLoaderData } from 'react-router';
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const MyInterests = () => {
    const interestData=useLoaderData()
    console.log(interestData)
    const interests = useLoaderData(); // [{ userName, quantity, cropName, ... }]

 
  const chartData = interests.map((item, index) => ({
    name: item.userName + " (" + item.cropName + ")",
    value: item.quantity,
    color: COLORS[index % COLORS.length]
  }));

    return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">📊 My Interests Chart</h1>

      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            label
          >
            {chartData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
     
    );
};

export default MyInterests;