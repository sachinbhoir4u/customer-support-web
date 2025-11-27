"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Send } from "lucide-react"

interface ReplyFormProps {
  onSend: (message: string, isInternal: boolean) => void
}

export function ReplyForm({ onSend }: ReplyFormProps) {
  const [replyText, setReplyText] = useState("")
  const [isInternal, setIsInternal] = useState(false)

  const handleSendReply = () => {
    if (replyText.trim()) {
      onSend(replyText, isInternal)
      setReplyText("")
      setIsInternal(false)
    }
  }

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-base">Add Reply</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type your response..."
          className="w-full min-h-32 px-3 py-2 border border-input border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring resize-none"
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              handleSendReply()
            }
          }}
        />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isInternal}
              onChange={(e) => setIsInternal(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm text-muted-foreground">Internal note (only visible to team)</span>
          </label>
          <Button variant="solid" onClick={handleSendReply} disabled={!replyText.trim()}>
            <Send size={16} />
            Send Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}