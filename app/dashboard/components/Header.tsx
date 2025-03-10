"use client";

import { Bell, Calendar, Settings } from "lucide-react"
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();

  const handleCalender = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/calender");
  };

  const handleSales = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/sales");
    alert("clicked");
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <img src="./C-logo.png" alt="Realtor.ai" width={150} height={40} />

            <nav className="hidden md:flex items-center space-x-4">
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">Product</button>
              <button onClick={handleSales} className="px-3 py-2 text-gray-600 hover:text-gray-900">Sales</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">Quotation</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">Purchases</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">Transfer</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">Returns</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900">People</button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
            </button>
            <button onClick={handleCalender} className="p-2 text-gray-600 hover:text-gray-900">
              <Calendar className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

