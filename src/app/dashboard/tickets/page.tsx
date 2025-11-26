import TicketsPage from "./components/TicketsPage"

export default function Page() {
  return <TicketsPage />
}

export const metadata = {
  title: "Tickets",
}


// const mockTickets = [
//   {
//     id: "TKT-001",
//     title: "Account login issue",
//     customer: "Sarah Johnson",
//     status: "open" as const,
//     priority: "high" as const,
//     created: "2024-01-15",
//     updated: "2 hours ago",
//     assignee: "John Doe",
//     replies: 3,
//   },
//   {
//     id: "TKT-002",
//     title: "Billing question",
//     customer: "Mike Chen",
//     status: "in-progress" as const,
//     priority: "medium" as const,
//     created: "2024-01-14",
//     updated: "30 minutes ago",
//     assignee: "Emma Davis",
//     replies: 2,
//   },
//   {
//     id: "TKT-003",
//     title: "Feature request",
//     customer: "Lisa Wang",
//     status: "open" as const,
//     priority: "low" as const,
//     created: "2024-01-14",
//     updated: "5 hours ago",
//     assignee: "Alex Turner",
//     replies: 1,
//   },
//   {
//     id: "TKT-004",
//     title: "Integration help needed",
//     customer: "James Wilson",
//     status: "resolved" as const,
//     priority: "medium" as const,
//     created: "2024-01-10",
//     updated: "1 day ago",
//     assignee: "Emma Davis",
//     replies: 8,
//   },
//   {
//     id: "TKT-005",
//     title: "API documentation",
//     customer: "David Lee",
//     status: "open" as const,
//     priority: "low" as const,
//     created: "2024-01-13",
//     updated: "12 hours ago",
//     assignee: "John Doe",
//     replies: 0,
//   },
// ]

