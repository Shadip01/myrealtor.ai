export default function DashboardPreview() {
  return (
    <div className="bg-white rounded-xl text-black p-4 shadow-lg">
      {/* Financial Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div className="p-2">
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            Total income
          </div>
          <div className="font-bold">$5,761.20</div>
          <div className="text-xs text-green-500">+5.4% than last month</div>
        </div>

        <div className="p-2">
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            Total expenses
          </div>
          <div className="font-bold">$1,651.22</div>
          <div className="text-xs text-red-500">+4.3% than last month</div>
        </div>

        <div className="p-2">
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            Investment
          </div>
          <div className="font-bold">$4,213.67</div>
          <div className="text-xs text-green-500">+8.4% than last month</div>
        </div>

        <div className="p-2">
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
            Total saving
          </div>
          <div className="font-bold">$2,896.31</div>
          <div className="text-xs text-green-500">+6.8% than last month</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">Statistics</div>
          <div className="flex text-xs">
            <div className="flex items-center mr-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              Income
            </div>
            <div className="flex items-center mr-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Expenses
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
              Monthly
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="h-32 flex items-end justify-between">
          {[30, 70, 25, 60, 40, 35, 75, 45].map((height, index) => (
            <div key={index} className="w-6 flex flex-col items-center">
              <div
                className={`w-full rounded-t-sm ${index === 3 ? "bg-purple-600" : "bg-blue-500"}`}
                style={{ height: `${height}%` }}
              >
                {index === 3 && (
                  <div className="relative -top-6 bg-blue-900 text-white text-xs px-1 py-0.5 rounded">$470.00</div>
                )}
              </div>
              <div className="text-xs mt-1 text-gray-500">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"][index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">Transactions</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-3 w-3" />
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
                S
              </div>
              <span>Spotify</span>
            </div>
            <div className="text-red-500">-$10.00</div>
            <div className="text-gray-500">Monthly</div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-3 w-3" />
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white mr-2">A</div>
              <span>Adobe Illustrator</span>
            </div>
            <div className="text-red-500">-$60.00</div>
            <div className="text-gray-500">Monthly</div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-3 w-3" />
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">B</div>
              <span>Bank Transfer</span>
            </div>
            <div className="text-green-500">+$200.00</div>
            <div className="text-gray-500">Monthly</div>
          </div>
        </div>
      </div>

      {/* Savings Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">My Saving</div>
          <div className="text-xs text-blue-500">View all</div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Total saving</span>
            <div className="flex items-center">
              <span className="font-bold mr-2">$4,213.67</span>
              <span className="text-xs text-green-500">+10% than last month</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Education</span>
                <span>$250/500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Health</span>
                <span>$1000/3000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "33%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>New house</span>
                <span>$2000/7500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "27%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

