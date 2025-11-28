import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Badge } from "@/components/badge"

export interface MessageCardProps {
  id: string
  senderName: string
  senderImage?: string
  message: string
  timestamp: string
  channel: "email" | "chat" | "whatsapp" | "twitter"
  priority?: "low" | "medium" | "high"
  unread?: boolean
}

const channelColors = {
  email: "bg-blue-500/10 text-blue-500",
  chat: "bg-green-500/10 text-green-500",
  whatsapp: "bg-emerald-500/10 text-emerald-500",
  twitter: "bg-sky-500/10 text-sky-500",
}

const priorityColors = {
  low: "bg-slate-500/10 text-slate-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  high: "bg-red-500/10 text-red-500",
}

export default function MessageCard({
  senderName,
  senderImage,
  message,
  timestamp,
  channel,
  priority,
  unread,
}: MessageCardProps) {
  return (
    <div
      className={`p-4 border border-gray-300 rounded-lg hover:bg-card/50 transition-colors cursor-pointer ${
        // unread ? "bg-accent/5 border-primary/30" : ""
        unread 
          ? "bg-gradient-to-r from-gray-200 to-gray-100/50 border-gray-200 shadow-sm" 
          : "border-border hover:shadow-sm"
      }`}
    >
      <div className="flex gap-3 items-center">
        {/* Avatar */}
        <Avatar className="h-10 w-10 ">
          <AvatarImage src={senderImage || "/placeholder.svg"} />
          <AvatarFallback>{senderName.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>

        {/* Content + Timestamp */}
        <div className="flex-1 min-w-0">
          {/* Name + Badges + Timestamp in same row */}
          <div className="flex justify-between items-start mb-1">
            {/* Left Section */}
            <div className="flex items-center gap-2">
              <p className="font-medium text-foreground">{senderName}</p>

              <Badge variant="outline" className={channelColors[channel]}>
                {channel}
              </Badge>

              {priority && (
                <Badge variant="outline" className={priorityColors[priority]}>
                  {priority}
                </Badge>
              )}
            </div>

            {/* Timestamp (right aligned) */}
            <p className="text-xs text-muted-foreground whitespace-nowrap ml-4">
              {timestamp}
            </p>
          </div>

          {/* Message */}
          <p className="text-sm text-muted-foreground line-clamp-2">{message}</p>
        </div>
      </div>

    </div>
  )
}
