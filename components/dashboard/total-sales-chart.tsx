"use client"

import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
}

const labels = ["1", "5", "10", "15", "20", "25", "30"]

const data = {
  labels,
  datasets: [
    {
      label: "Oct",
      data: [1000000, 1200000, 1100000, 1300000, 1400000, 1600000, 1652850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Sep",
      data: [900000, 1000000, 1050000, 1100000, 1200000, 1300000, 1400000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

export function TotalSalesChart() {
  const [selectedMonth, setSelectedMonth] = useState("Month")
  const [selectedYear, setSelectedYear] = useState("Year")

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total sales</h2>
        <div className="flex space-x-2">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option>Month</option>
            <option>October</option>
            <option>September</option>
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option>Year</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>
      <div className="text-3xl font-bold mb-4">$1,652,850</div>
      <Line options={options} data={data} />
    </div>
  )
}

