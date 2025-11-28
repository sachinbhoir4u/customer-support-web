"use client"

import { useState } from "react"
import { InboxFilters } from "./components/InboxFilters"
import { MessageList } from "./components/MessageList"

const mockMessages = [
  {
    id: "1",
    senderName: "Sarah Johnson",
    message: "Hi, I need help with my account. I cannot log in.",
    timestamp: "2 minutes ago",
    channel: "email" as const,
    priority: "high" as const,
    unread: true,
  },
  {
    id: "2",
    senderName: "Mike Chen",
    message: "Can you provide information about your enterprise plan?",
    timestamp: "5 minutes ago",
    channel: "chat" as const,
    priority: "medium" as const,
    unread: true,
  },
  {
    id: "3",
    senderName: "Emma Davis",
    message: "Thanks for your help! Issue resolved.",
    timestamp: "1 hour ago",
    channel: "whatsapp" as const,
    unread: false,
  },
  {
    id: "4",
    senderName: "John Smith",
    message: "When will the new features be available?",
    timestamp: "3 hours ago",
    channel: "twitter" as const,
    unread: false,
  },
  {
    id: "5",
    senderName: "Lisa Wang",
    message: "Interested in a demo of your platform",
    timestamp: "5 hours ago",
    channel: "email" as const,
    priority: "medium" as const,
    unread: false,
  },
]

export default function InboxLayout() {
  const [messages] = useState(mockMessages)
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterChannel, setFilterChannel] = useState<string | null>(null)

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = !filterChannel || msg.channel === filterChannel
    return matchesSearch && matchesFilter
  })

  const unreadCount = messages.filter((m) => m.unread).length
  const selectedCount = selectedMessages.length

  const handleSelectAll = () => {
    if (selectedCount === filteredMessages.length) {
      setSelectedMessages([])
    } else {
      setSelectedMessages(filteredMessages.map((m) => m.id))
    }
  }

  const handleToggleSelection = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedMessages([...selectedMessages, id])
    } else {
      setSelectedMessages(selectedMessages.filter((selectedId) => selectedId !== id))
    }
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">Inbox</h1>
            <p className="text-muted-foreground mt-1">{unreadCount} unread messages</p>
        </div>
        
        <InboxFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterChannel={filterChannel}
          onFilterChange={setFilterChannel}
        />

        <MessageList
          messages={filteredMessages}
          selectedMessages={selectedMessages}
          onToggleSelection={handleToggleSelection}
          onSelectAll={handleSelectAll}
          selectedCount={selectedCount}
          filteredCount={filteredMessages.length}
        />
      </div>
    </div>
  )
}