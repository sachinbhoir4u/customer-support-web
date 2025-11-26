"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Card } from "@/components/card"
import { Badge } from "@/components/badge"
import { Search, Plus, Filter } from "lucide-react"

const mockTickets = [
  {
    id: "TKT-001",
    title: "Account login issue",
    customer: "Sarah Johnson",
    status: "open" as const,
    priority: "high" as const,
    created: "2024-01-15",
    updated: "2 hours ago",
    assignee: "John Doe",
    replies: 3,
  },
  {
    id: "TKT-002",
    title: "Billing question",
    customer: "Mike Chen",
    status: "in-progress" as const,
    priority: "medium" as const,
    created: "2024-01-14",
    updated: "30 minutes ago",
    assignee: "Emma Davis",
    replies: 2,
  },
  {
    id: "TKT-003",
    title: "Feature request",
    customer: "Lisa Wang",
    status: "open" as const,
    priority: "low" as const,
    created: "2024-01-14",
    updated: "5 hours ago",
    assignee: "Alex Turner",
    replies: 1,
  },
  {
    id: "TKT-004",
    title: "Integration help needed",
    customer: "James Wilson",
    status: "resolved" as const,
    priority: "medium" as const,
    created: "2024-01-10",
    updated: "1 day ago",
    assignee: "Emma Davis",
    replies: 8,
  },
  {
    id: "TKT-005",
    title: "API documentation",
    customer: "David Lee",
    status: "open" as const,
    priority: "low" as const,
    created: "2024-01-13",
    updated: "12 hours ago",
    assignee: "John Doe",
    replies: 0,
  },
]

const statusColors = {
  open: "bg-red-500/10 text-red-500",
  "in-progress": "bg-blue-500/10 text-blue-500",
  resolved: "bg-green-500/10 text-green-500",
}

const priorityColors = {
  low: "bg-slate-500/10 text-slate-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  high: "bg-red-500/10 text-red-500",
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState(mockTickets)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = !statusFilter || ticket.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const openCount = tickets.filter((t) => t.status === "open").length
  const inProgressCount = tickets.filter((t) => t.status === "in-progress").length

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tickets</h1>
            <p className="text-muted-foreground mt-2">
              {openCount} open, {inProgressCount} in progress
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/tickets/new">
              <Plus size={18} className="mr-2" />
              New Ticket
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter size={18} />
              </Button>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 flex-wrap">
              {["open", "in-progress", "resolved"].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(statusFilter === status ? null : status)}
                >
                  {status
                    .split("-")
                    .map((word, i) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Tickets Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-muted-foreground">Ticket ID</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Title</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Customer</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Assignee</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Priority</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Updated</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="border-b border-border hover:bg-card/50 transition-colors cursor-pointer"
                  >
                    <td className="p-4">
                      <Link
                        href={`/dashboard/tickets/${ticket.id}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {ticket.id}
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link href={`/dashboard/tickets/${ticket.id}`} className="hover:underline">
                        {ticket.title}
                      </Link>
                    </td>
                    <td className="p-4 text-sm">{ticket.customer}</td>
                    <td className="p-4 text-sm">{ticket.assignee}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={statusColors[ticket.status as keyof typeof statusColors]}>
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className={priorityColors[ticket.priority as keyof typeof priorityColors]}
                      >
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{ticket.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {filteredTickets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tickets found</p>
          </div>
        )}
      </div>
    </div>
  )
}
