import Image from "next/image"

const realtors = [
  { name: "Ann Dokidis", efficiency: 79.3 },
  { name: "Anika Levin", efficiency: 67.1 },
  { name: "Kadin Bator", efficiency: 48.4 },
  { name: "Marley Mango", efficiency: 31.2 },
  { name: "Madelyn Siphron", efficiency: 21.6 },
]

export function RealtorEfficiency() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Realtor efficiency</h2>
      <div className="space-y-4">
        {realtors.map((realtor) => (
          <div key={realtor.name} className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt={realtor.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">{realtor.name}</span>
                <span className="text-sm text-gray-500">{realtor.efficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${realtor.efficiency}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

