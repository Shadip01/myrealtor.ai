import { Package, ShoppingCart, MessageSquare, RefreshCw, Users, Bell, Settings } from "lucide-react"

const quickAccessItems = [
  { icon: Package, label: "Products", active: true },
  { icon: ShoppingCart, label: "Sales" },
  { icon: MessageSquare, label: "Quotations" },
  { icon: ShoppingCart, label: "Purchases" },
  { icon: RefreshCw, label: "Transfers" },
  { icon: Users, label: "Customers" },
  { icon: Users, label: "Suppliers" },
  { icon: Bell, label: "Notifications" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
]

export default function QuickAccess() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {quickAccessItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${
              item.active ? "bg-blue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-6 w-6 mb-2" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

