"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  BarChart,
  UserCircle,
  Bell,
  Settings,
  HelpCircle,
  FileText,
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Advertisements", href: "/advertisements", icon: FileText },
  { name: "Deals", href: "/deals", icon: MessageSquare },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Team", href: "/team", icon: UserCircle },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help & support", href: "/support", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-indigo-600">URBN</h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                pathname === item.href ? "bg-gray-100" : ""
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

