"use client"

import SidebarNav from "./SidebarNav"
import { Button } from "@/components/button"
import Link from "next/link"
import { Settings, LogOut } from "lucide-react"
import { useSidebar } from "./SidebarContext" 

export function Sidebar() {
  const { isOpen } = useSidebar() 

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col overflow-hidden border-gray-300`}
    >
      <div className="p-5 h-16 border-b border-sidebar-border border-gray-300">
        <h1 className="text-xl font-bold text-sidebar-foreground">Customer Support</h1>
      </div>
      <SidebarNav sidebarOpen={isOpen} />
      <div className="border-t border-sidebar-border p-4 space-y-2 border-gray-300">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link href="/dashboard/settings">
            <Settings size={18} />
            Settings
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  )
}