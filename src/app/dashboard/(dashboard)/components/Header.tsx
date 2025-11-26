"use client"

import { Button } from "@/components/button"
import { Menu, X } from "lucide-react"
import { useSidebar } from "./SidebarContext"  

export function Header() {
  const { isOpen, toggle } = useSidebar() 

  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-6 border-gray-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        className="hover:bg-muted rounded-lg transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </header>
  )
}