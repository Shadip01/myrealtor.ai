"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState("September 2021")

  // Days of the week
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  // Calendar days for September 2021
  const days = [
    { day: 1, isHighlighted: false },
    { day: 2, isHighlighted: false },
    { day: 3, isHighlighted: false },
    { day: 4, isHighlighted: false },
    { day: 5, isHighlighted: false },
    { day: 6, isHighlighted: false },
    { day: 7, isHighlighted: false },
    { day: 8, isHighlighted: false },
    { day: 9, isHighlighted: false },
    { day: 10, isHighlighted: false },
    { day: 11, isHighlighted: false },
    { day: 12, isHighlighted: false },
    { day: 13, isHighlighted: false },
    { day: 14, isHighlighted: false },
    { day: 15, isHighlighted: false },
    { day: 16, isHighlighted: false },
    { day: 17, isHighlighted: false },
    { day: 18, isHighlighted: false },
    { day: 19, isHighlighted: true },
    { day: 20, isHighlighted: false },
    { day: 21, isHighlighted: false },
    { day: 22, isHighlighted: false },
    { day: 23, isHighlighted: false },
    { day: 24, isHighlighted: false },
    { day: 25, isHighlighted: false },
    { day: 26, isHighlighted: false },
    { day: 27, isHighlighted: false },
    { day: 28, isHighlighted: false },
    { day: 29, isHighlighted: false },
    { day: 30, isHighlighted: false },
    { day: 31, isHighlighted: false },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-purple-200 rounded flex items-center justify-center">
            <div className="h-3 w-3 bg-purple-400 rounded" />
          </div>
          <h3 className="text-xl font-medium text-purple-400">Calendar</h3>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button className="p-1">
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </button>
        <h4 className="font-medium">{currentMonth}</h4>
        <button className="p-1">
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map(({ day, isHighlighted }) => (
          <div
            key={day}
            className={`py-2 text-sm ${
              isHighlighted ? "bg-purple-500 text-white rounded-full" : "hover:bg-gray-100 rounded-full"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

