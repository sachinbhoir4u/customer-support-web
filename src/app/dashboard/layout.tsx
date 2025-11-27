import DashboardEntry from "./(dashboard)/page";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardEntry>{children}</DashboardEntry>;
}



