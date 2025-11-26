import DashboardEntry from "./(dashboard)/page";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardEntry>{children}</DashboardEntry>;
}


// // app/dashboard/layout.tsx
// import DashboardLayout from "./(dashboard)/components/DashboardLayout"

// export default function DashboardRootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <DashboardLayout>{children}</DashboardLayout>
// }


