import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  { name: "Smart score", value: 82, change: 18, changeType: "increase", total: 100 },
  { name: "Number of sales", value: 24, change: 20, changeType: "increase" },
  { name: "Leads", value: 2986, change: 12, changeType: "increase" },
  { name: "New clients", value: 19, change: 34, changeType: "increase" },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            {stat.total && <p className="ml-2 text-sm text-gray-500">/{stat.total}</p>}
          </div>
          <div className="mt-4">
            <div
              className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                stat.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {stat.changeType === "increase" ? (
                <ArrowUpRight className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
              ) : (
                <ArrowDownRight className="self-center flex-shrink-0 h-5 w-5 text-red-500" />
              )}
              <span className="ml-1">{stat.change}%</span>
            </div>
            <span className="ml-2 text-sm text-gray-500">Last week</span>
          </div>
        </div>
      ))}
    </div>
  )
}

