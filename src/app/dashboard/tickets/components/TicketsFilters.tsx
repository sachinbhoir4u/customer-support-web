"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

interface TicketsFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  statusFilter: string | null
  onStatusFilter: (status: string | null) => void
}

const statuses = ["open", "in-progress", "resolved"] as const

export function TicketsFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilter,
}: TicketsFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search tickets by ID, title, or customer..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter size={18} />
        </Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {statuses.map((status) => (
          <Button
            key={status}
            variant={statusFilter === status ? "default" : "outline"}
            size="sm"
            onClick={() => onStatusFilter(statusFilter === status ? null : status)}
          >
            {status.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </Button>
        ))}
        {statusFilter && (
          <Button variant="ghost" size="sm" onClick={() => onStatusFilter(null)}>
            Clear filter
          </Button>
        )}
      </div>
    </div>
  )
}