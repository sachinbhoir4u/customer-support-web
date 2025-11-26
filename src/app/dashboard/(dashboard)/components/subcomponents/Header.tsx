"use client"

import { Button } from "@/components/button"
import { Menu, X } from "lucide-react"
import { useSidebar } from "./SidebarContext"  

export function Header() {
  const { isOpen, toggle } = useSidebar() 

  return (
    <header className="h-16 bg-white flex items-center px-6 border-b border-gray-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        className="hover:bg-muted rounded-lg transition-colors cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </header>
  )
}