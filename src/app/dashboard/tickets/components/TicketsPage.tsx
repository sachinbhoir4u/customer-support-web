"use client"

import { useState } from "react";
import { Card } from "@/components/card";
import { TicketsHeader } from "./subcomponents/TicketsHeader";
import { TicketsFilters } from "./subcomponents/TicketsFilters";
import { TicketsTable } from "./subcomponents/TicketsTable";
import { TicketsEmptyState } from "./subcomponents/TicketsEmptyState";

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
export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = !statusFilter || ticket.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const openCount = mockTickets.filter((t) => t.status === "open").length
  const inProgressCount = mockTickets.filter((t) => t.status === "in-progress").length

  return (
    <div className="">
      <div className="max-w-7xl mx-auto space-y-6">
        <TicketsHeader openCount={openCount} inProgressCount={inProgressCount} />

        <Card className="p-4 bg-white border-gray-100">
          <TicketsFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilter={setStatusFilter}
          />
        </Card>

        <Card className="bg-white border-gray-100 px-0 py-0">
          {filteredTickets.length > 0 ? (
            <TicketsTable tickets={filteredTickets} />
          ) : (
            <TicketsEmptyState />
          )}
        </Card>
      </div>
    </div>
  )
}