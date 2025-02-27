// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import {
//   LayoutDashboard,
//   MessageSquare,
//   Users,
//   BarChart,
//   UserCircle,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
// } from "lucide-react"

// const navItems = [
//   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//   { name: "Advertisements", href: "/advertisements", icon: FileText },
//   { name: "Deals", href: "/deals", icon: MessageSquare },
//   { name: "Clients", href: "/clients", icon: Users },
//   { name: "Analytics", href: "/analytics", icon: BarChart },
//   { name: "Team", href: "/team", icon: UserCircle },
//   { name: "Messages", href: "/messages", icon: MessageSquare },
//   { name: "Notifications", href: "/notifications", icon: Bell },
//   { name: "Settings", href: "/settings", icon: Settings },
//   { name: "Help & support", href: "/support", icon: HelpCircle },
// ]

// export default function Sidebar() {
//   const pathname = usePathname()

//   return (
//     <aside className="w-64 bg-white border-r">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-indigo-600">URBN</h1>
//       </div>
//       <nav className="mt-8">
//         {navItems.map((item) => {
//           const Icon = item.icon
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
//                 pathname === item.href ? "bg-gray-100" : ""
//               }`}
//             >
//               <Icon className="w-5 h-5 mr-3" />
//               {item.name}
//             </Link>
//           )
//         })}
//       </nav>
//     </aside>
//   )
// }


"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search, HelpCircle, Settings, X, Clock, Users, LinkIcon } from "lucide-react"

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const timeSlots = Array.from({ length: 12 }, (_, i) => i + 8) // 8 AM to 7 PM

const events = [
  {
    id: 1,
    title: "Jane Feedback",
    start: "8:00am",
    end: "8:30am",
    color: "bg-[#E5E0FF]",
  },
  {
    id: 2,
    title: "Meet with Anne",
    start: "9:00am",
    end: "9:30am",
    color: "bg-[#E5E0FF]",
  },
  {
    id: 3,
    title: "Feedback Kapas Project",
    start: "8:30am",
    end: "10:00am",
    color: "bg-[#E7F5E8]",
  },
  // Add more events as needed
]

export default function Calendar() {
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Browser-like frame */}
      <div className="max-w-[1200px] mx-auto my-4 rounded-xl overflow-hidden border shadow-lg bg-white">
        {/* Window controls */}
        <div className="flex items-center px-4 py-2 bg-gray-100 border-b">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-1/2 bg-white rounded-md px-4 py-1 text-sm text-gray-600 flex items-center justify-between">
              waton.com
              <button className="text-gray-400">⟳</button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r p-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg text-white flex items-center justify-center">17</div>
              <div>
                <h2 className="font-medium">Waton Calendar</h2>
                <p className="text-sm text-gray-500">Marketing's workspace</p>
              </div>
            </div>

            {/* Mini calendar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span>September 2023</span>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Calendar grid would go here */}
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-sm">Work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-sm">Personal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm">Education</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Calendar header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">September 2023</h1>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md">Today</button>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <HelpCircle className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  <button className="px-4 py-1 text-sm bg-gray-100 rounded-md">Day</button>
                  <button className="px-4 py-1 text-sm bg-gray-800 text-white rounded-md">Week</button>
                  <button className="px-4 py-1 text-sm bg-gray-100 rounded-md">Month</button>
                </div>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="calendar-grid">
              {/* Time column */}
              <div className="border-r">
                {timeSlots.map((time) => (
                  <div key={time} className="time-slot px-2 text-sm text-gray-500">
                    {time}:00
                  </div>
                ))}
              </div>

              {/* Days columns */}
              {days.map((day, i) => (
                <div key={day} className="relative">
                  <div className="text-sm font-medium p-2 text-center border-b">
                    {day} {i + 9}
                  </div>
                  {timeSlots.map((time) => (
                    <div key={time} className="time-slot"></div>
                  ))}
                </div>
              ))}

              {/* Events */}
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`absolute ${event.color} p-2 rounded-lg text-sm`}
                  style={{
                    left: "100px", // This would be calculated based on the day
                    top: "100px", // This would be calculated based on the time
                    width: "200px",
                    height: "60px",
                  }}
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs text-gray-600">
                    {event.start} - {event.end}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Add Schedule</h2>
              <button onClick={() => setShowAddEvent(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="New event title" className="w-full p-2 border rounded-md" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <input type="text" value="Wednesday, Jul 12" className="flex-1 p-2 border rounded-md" />
              </div>
              <div className="flex gap-2">
                <input type="text" value="9:30am" className="w-24 p-2 border rounded-md" />
                <span className="text-gray-400">→</span>
                <input type="text" value="10:00am" className="w-24 p-2 border rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Add guest" className="flex-1 p-2 border rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Add meeting link" className="flex-1 p-2 border rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-400"></div>
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                <div className="w-6 h-6 rounded-full bg-green-400"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                <div className="w-6 h-6 rounded-full bg-red-400"></div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setShowAddEvent(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm bg-gray-900 text-white rounded-md"
                  onClick={() => setShowAddEvent(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


