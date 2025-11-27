"use client"

import { useState } from "react"
import { Card } from "@/components/card"
import { TicketMetadata } from "./components/TicketMetadata"
import { ReplyList } from "./components/ReplyList"
import { ReplyForm } from "./components/ReplyForm"

const mockTicketDetail = {
  id: "TKT-001",
  title: "Account login issue",
  customer: "Sarah Johnson",
  email: "sarah@example.com",
  status: "open" as const,
  priority: "high" as const,
  created: "2024-01-15 10:30 AM",
  assignee: "John Doe",
  description: "I cannot log into my account. I tried resetting my password but did not receive the reset email.",
  replies: [
    {
      id: "1",
      author: "John Doe",
      role: "Support Agent",
      message: "Hi Sarah, thank you for reaching out. I can help you with this. Let me check your account status.",
      timestamp: "10:45 AM",
      isInternal: false,
    },
    {
      id: "2",
      author: "John Doe",
      role: "Support Agent",
      message:
        "I see the issue - your email is not verified. Can you check your spam folder for the verification email?",
      timestamp: "11:00 AM",
      isInternal: false,
    },
    {
      id: "3",
      author: "John Doe",
      role: "Support Agent",
      message: "Internal note: Customer is in the enterprise tier",
      timestamp: "11:05 AM",
      isInternal: true,
    },
  ],
}

export default function TicketDetailsLayout() {
  const [ticket, setTicket] = useState(mockTicketDetail)
  const [isSending, setIsSending] = useState(false)

  const handleSendReply = async (message: string, isInternal: boolean) => {
    setIsSending(true)
    // Simulate API call
    setTimeout(() => {
      setTicket(prev => ({
        ...prev,
        replies: [
          ...prev.replies,
          {
            id: Date.now().toString(),
            author: "You",
            role: "Support Agent",
            message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isInternal,
          },
        ],
      }))
      setIsSending(false)
    }, 1000)
  }

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Metadata + Description */}
        <Card className="bg-white border border-gray-100">
          <TicketMetadata
            title={ticket.title}
            id={ticket.id}
            status={ticket.status}
            priority={ticket.priority}
            customer={ticket.customer}
            email={ticket.email}
            assignee={ticket.assignee}
            created={ticket.created}
            description={ticket.description}
          />
        </Card>

        <div className="p-6 border border-gray-100 rounded-2xl bg-white space-y-6">
            {/* Replies */}
            <ReplyList replies={ticket.replies} />

            {/* Reply Form */}
            <ReplyForm onSend={handleSendReply} />
        </div>
      </div>
    </div>
  )
}