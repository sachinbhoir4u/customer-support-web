import DashboardLayout from "./components/DashboardLayout"

export default function DashboardEntry({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
