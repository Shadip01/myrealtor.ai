export default function BestSellers() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Best Sellers (Jan-2020)</h3>
        <select className="border rounded-lg px-3 py-2">
          <option>Month</option>
        </select>
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <span className="text-gray-600">Page 2 Lines (Rate of 2.25) Amazon.co.uk</span>
            <span className="font-semibold">50</span>
          </div>
        ))}
      </div>
    </div>
  )
}

