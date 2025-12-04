"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inbox, Ticket, ChartArea } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Inbox", href: "/dashboard/inbox", icon: Inbox },
    { label: "Tickets", href: "/dashboard/tickets", icon: Ticket },
    { label: "Analytics", href: "/dashboard/analytics", icon: ChartArea },
]

export default function SidebarNav({ sidebarOpen }: { sidebarOpen: boolean }) {
  const pathname = usePathname();

  if (!sidebarOpen) return null

  return (
    // <div className="border mt-4 p-4 border-gray-200 space-y-2 bg-white rounded-lg"></div>
    <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-white rounded-br-xl border-r border-b border-gray-100 ">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return <Link
          key={item.href}
          href={item.href}
          className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative group",
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-sidebar-foreground hover:bg-blue-50 hover:text-blue-700"
            )}
        >
          <Icon size={20} />
          <span>{item.label}</span>
        </Link>
    })}
    </nav>
  )
}