"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inbox, Ticket } from "lucide-react"

const navItems = [
    { label: "Inbox", href: "/dashboard/inbox", icon: Inbox },
    { label: "Tickets", href: "/dashboard/tickets", icon: Ticket },
]

export default function SidebarNav({ sidebarOpen }: { sidebarOpen: boolean }) {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  if (!sidebarOpen) return null

  return (
    <nav className="flex-1 overflow-y-auto p-4 space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon
        return <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
            isActive(item.href)
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          }`}
        >
          <Icon size={20} />
          <span>{item.label}</span>
        </Link>
    })}
    </nav>
  )
}