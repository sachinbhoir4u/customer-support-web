import { ReplyCard } from "./ReplyCard"

interface ReplyListProps {
  replies: Array<{
    id: string
    author: string
    role: string
    message: string
    timestamp: string
    isInternal: boolean
  }>
}

export function ReplyList({ replies }: ReplyListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Conversation</h3>
      {replies.map((reply) => (
        <ReplyCard key={reply.id} {...reply} />
      ))}
    </div>
  )
}