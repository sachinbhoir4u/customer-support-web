import { Badge } from "@/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Card, CardContent } from "@/components/card"
import { cn } from "@/lib/utils"

interface ReplyCardProps {
  author: string
  role: string
  message: string
  timestamp: string
  isInternal: boolean
}

export function ReplyCard({ author, role, message, timestamp, isInternal }: ReplyCardProps) {
  return (
    <Card className={cn(isInternal ? "bg-yellow-50/50 border-yellow-200/50" : "bg-white border-gray-100")}>
      <CardContent className="px-3 py-0">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                    <p className="font-medium">{author}</p>
                    <Badge variant="secondary" className="text-xs">
                        {role}
                    </Badge>
                    {isInternal && (
                        <Badge
                        variant="outline"
                        className="text-xs bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                        >
                        Internal
                        </Badge>
                    )}
                </div>
                <p className="text-xs text-muted-foreground ml-4 whitespace-nowrap">{timestamp}</p>
            </div>
            <p className="text-foreground">{message}</p>
            </div>

        </div>
      </CardContent>
    </Card>
  )
}