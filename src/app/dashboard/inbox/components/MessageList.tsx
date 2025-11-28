"use client"

import { Card } from "@/components/card"
import { Button } from "@/components/button"
import { Archive, Trash2 } from "lucide-react"
import MessageCard from "./MessageCard"

interface MessageListProps {
  messages: Array<{
    id: string
    senderName: string
    message: string
    timestamp: string
    channel: "email" | "chat" | "whatsapp" | "twitter"
    priority?: "low" | "medium" | "high"
    unread: boolean
  }>
  selectedMessages: string[]
  onToggleSelection: (id: string, checked: boolean) => void
  onSelectAll: () => void
  selectedCount: number
  filteredCount: number
}

export function MessageList({
  messages,
  selectedMessages,
  onToggleSelection,
  onSelectAll,
  selectedCount,
  filteredCount,
}: MessageListProps) {
  const isAllSelected = selectedCount === filteredCount && filteredCount > 0

  return (
    <div className="space-y-3 bg-white border border-gray-200 rounded-2xl p-4">
      {/* Bulk Actions */}
      {selectedCount > 0 && (
        <Card className="px-4 py-2 bg-accent/5 border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{selectedCount} selected</span>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                <Archive size={16} className="mr-1" />
                Archive
              </Button>
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash2 size={16} className="mr-1" />
                Delete
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* List Header */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-300">
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={onSelectAll}
          className="w-4 h-4 rounded"
        />
        <span className="text-xs text-muted-foreground font-medium">SELECT ALL</span>
      </div>

      {/* Messages */}
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedMessages.includes(message.id)}
              onChange={(e) => onToggleSelection(message.id, e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <div className="flex-1">
              <MessageCard {...message} />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No messages found</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  )
}