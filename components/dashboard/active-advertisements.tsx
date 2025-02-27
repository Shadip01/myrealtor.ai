import Image from "next/image"
import { Edit, ArrowUpRight } from "lucide-react"

const advertisements = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    price: "$1,528,000",
    details: "4 bds • 3 ba • 233 m²",
    location: "Benevento, Italy",
    days: 101,
    date: "Jul 8, 2024",
    views: 1317,
    viewsToday: 31,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    price: "$1,300,000",
    details: "4 bds • 2 ba • 186 m²",
    location: "Benevento, Italy",
    days: 116,
    date: "Jul 1, 2024",
    views: 1851,
    viewsToday: 9,
  },
]

export function ActiveAdvertisements() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active advertisements</h2>
        <button className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm">+ New</button>
      </div>
      <div className="space-y-4">
        {advertisements.map((ad) => (
          <div key={ad.id} className="flex space-x-4">
            <Image src={ad.image || "/placeholder.svg"} alt="Property" width={100} height={75} className="rounded-md" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{ad.price}</h3>
                <button className="text-gray-500 hover:text-gray-700">
                  <Edit size={16} />
                </button>
              </div>
              <p className="text-sm text-gray-600">{ad.details}</p>
              <p className="text-sm text-gray-600">{ad.location}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Active {ad.days} days</span>
                <span>{ad.date}</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <div className="flex items-center text-green-600">
                <ArrowUpRight size={16} />
                <span className="text-sm">Boost</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">{ad.views} Views</p>
                <p className="text-sm text-gray-500">+{ad.viewsToday} today</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

