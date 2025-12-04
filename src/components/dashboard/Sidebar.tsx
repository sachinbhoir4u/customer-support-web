"use client"

import SidebarNav from "./SidebarNav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, LogOut } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"
import { useRouter } from "next/navigation"
import { useLoading } from "@/context/LoadingContext"
import { googleLogout } from '@react-oauth/google'

export function Sidebar() {
  const { isOpen } = useSidebar()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoading()

  const handleLogout = async () => {
    try {
      showLoader()
      // await signOut({ redirect: false })
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      googleLogout()
      localStorage.removeItem('token')
      sessionStorage.clear()

      router.replace("/auth", { scroll: false })
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setTimeout(() => hideLoader(), 500)
    }
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-sidebar transition-all duration-300 ease-in-out flex flex-col overflow-hidden `}
    >
      <div className="p-5 h-16 bg-white border-b border-gray-300">
        <Link className="text-xl font-bold text-sidebar-foreground" href={"/dashboard"}>
          Customer Support
        </Link>
      </div>
      
      <SidebarNav sidebarOpen={isOpen} />
      
      <div className="border-t border-r mt-4 p-4 border-gray-100 space-y-2 bg-white rounded-tr-xl">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link href="/dashboard/settings">
            <Settings size={18} />
            Settings
          </Link>
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={handleLogout} 
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/5 transition-colors duration-200"
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  )
}