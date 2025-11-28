"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Card } from "@/components/card"

interface InboxFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  filterChannel: string | null
  onFilterChange: (channel: string | null) => void
}

export function InboxFilters({
  searchQuery,
  onSearchChange,
  filterChannel,
  onFilterChange,
}: InboxFiltersProps) {
  const channels = ["email", "chat", "whatsapp", "twitter"] as const

  return (
    <Card className="p-4 bg-white border border-gray-200">
      <div className="space-y-4">
        {/* Search */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter size={18} />
          </Button>
        </div>

        {/* Channel Filters */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={filterChannel === null ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(null)}
          >
            All
          </Button>
          {channels.map((channel) => (
            <Button
              key={channel}
              variant={filterChannel === channel ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filterChannel === channel ? null : channel)}
            >
              {channel.charAt(0).toUpperCase() + channel.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}