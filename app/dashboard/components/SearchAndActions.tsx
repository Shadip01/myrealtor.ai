import { Search } from "lucide-react"

export default function SearchAndActions() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type to search"
            className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Shop</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Calculator</button>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">POS</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Today's Profit</button>
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">list Open Registers</button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Clear Cache</button>
        </div>
      </div>
    </div>
  )
}

