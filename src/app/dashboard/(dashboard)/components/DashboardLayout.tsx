"use client"

import { Sidebar } from "./subcomponents/Sidebar"
import { Header } from "./subcomponents/Header"
import { SidebarProvider } from "./subcomponents/SidebarContext" 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}