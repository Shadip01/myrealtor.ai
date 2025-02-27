import { Search } from "lucide-react"
import Image from "next/image"

export function DashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center">
        <button className="mr-4 text-gray-600 hover:text-gray-800">Manage widgets</button>
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="User avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  )
}

