"use client"

import SidebarNav from "./SidebarNav"
import { Button } from "@/components/button"
import Link from "next/link"
import { Settings, LogOut } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"
import { useRouter } from "next/navigation"
// import { signOut } from "next-auth/react";
import { useLoading } from "@/context/LoadingContext"

export function Sidebar() {
  const { isOpen } = useSidebar();
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();
  const handleLogout = async () => {
    showLoader()
    // await signOut({ redirect: false });
    setTimeout(() => {
      router.push("/auth");
      hideLoader();
    }, 1000);
    // router.push("/auth");
    router.refresh();
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-sidebar border-r border-white transition-all duration-300 ease-in-out flex flex-col overflow-hidden `}
    >
      <div className="p-5 h-16 bg-white border-b border-gray-300">
        <Link className="text-xl font-bold text-sidebar-foreground" href={"/dashboard"}>Customer Support</Link>
      </div>
      <SidebarNav sidebarOpen={isOpen} />
      {/* <div className="border-t p-4 space-y-2 border-white"> */}
      <div className="border-t border-r mt-4 p-4 border-gray-300 space-y-2 bg-white rounded-tr-xl">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link href="/dashboard/settings">
            <Settings size={18} />
            Settings
          </Link>
        </Button>
        <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-3 text-destructive hover:text-destructive cursor-pointer">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  )
}