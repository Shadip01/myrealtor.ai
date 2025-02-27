"use client"

import { useState } from "react"

const salesData = [
  {
    id: "01",
    date: "01/19/2020 01:51",
    reference: "39784648NF373735",
    customer: "Terri R Mitchell",
    status: "Completed",
    paymentStatus: "Paid",
    amount: "$188.29",
  },
  {
    id: "02",
    date: "01/19/2020 01:51",
    reference: "39784648NF373735",
    customer: "Terri R Mitchell",
    status: "Completed",
    paymentStatus: "Paid",
    amount: "$188.29",
  },
  {
    id: "03",
    date: "01/19/2020 01:51",
    reference: "39784648NF373735",
    customer: "Terri R Mitchell",
    status: "Pending",
    paymentStatus: "Pending",
    amount: "$188.29",
  },
  // Add more sample data as needed
]

export default function SalesOverview() {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedMonth, setSelectedMonth] = useState("January")

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Sales Overview</h2>
        <div className="flex items-center space-x-4">
          <select className="border rounded-lg px-3 py-2">
            <option>Sales</option>
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="January">January</option>
            <option value="February">February</option>
            {/* Add more months */}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Reference No</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Payment Status</th>
              <th className="text-left py-3 px-4">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className="border-b">
                <td className="py-3 px-4">{sale.id}</td>
                <td className="py-3 px-4">{sale.date}</td>
                <td className="py-3 px-4">{sale.reference}</td>
                <td className="py-3 px-4">{sale.customer}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      sale.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {sale.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      sale.paymentStatus === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {sale.paymentStatus}
                  </span>
                </td>
                <td className="py-3 px-4">{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

