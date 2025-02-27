import Image from "next/image"

interface PropertyCardProps {
  image: string
  location: string
  address: string
}

export default function PropertyCard({ image, location, address }: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={`Property in ${location}`} fill className="object-cover" />
      </div>
      <div className="py-4">
        <h3 className="text-xl font-semibold text-center">{location}</h3>
        <p className="text-gray-600 text-center">{address}</p>
      </div>
    </div>
  )
}

