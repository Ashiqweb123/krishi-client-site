import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const MyInterests = () => {
  const interests = useLoaderData();
  const [sortBy, setSortBy] = useState("recent");

  const sortedInterests = [...interests].sort((a, b) => {
    if (sortBy === "recent")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "quantity") return b.quantity - a.quantity;
    if (sortBy === "status") {
      const order = { pending: 1, accepted: 2, rejected: 3 };
      return order[a.status] - order[b.status];
    }
  });

  const chartData = sortedInterests.map((item, index) => ({
    name: `${item.cropName} (${item.quantity})`,
    value: item.quantity,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4"> My Interests Chart + Table</h1>

      <div className="mb-6">
        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recent">Sort by Recent</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      <div className="flex justify-center mb-10">
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

      <table className="w-full table-auto border border-gray-300 mt-6">
        <thead className="bg-green-500">
          <tr>
            <th className="border px-4 py-2">Crop Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {sortedInterests.map((i) => (
            <tr key={i._id}>
              <td className="border px-4 py-2">{i.cropName}</td>
              <td className="border px-4 py-2">{i.quantity}</td>
              <td className="border px-4 py-2">{i.message || "-"}</td>
              <td className="border px-4 py-2 font-bold">{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyInterests;
