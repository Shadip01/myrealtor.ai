export default function TodayEarning() {
  return (
    <div className="bg-blue-500 rounded-lg shadow p-6 text-white">
      <h3 className="text-xl mb-4">Today Earning</h3>
      <div className="text-4xl font-bold mb-4">$38635</div>
      <p className="text-blue-100 mb-6">Today pending amount $800</p>
      <button className="w-full bg-white text-blue-500 rounded-lg py-2 hover:bg-blue-50 transition-colors">
        View all sales
      </button>
    </div>
  )
}

