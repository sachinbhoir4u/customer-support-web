import Link from "next/link"
import { Badge } from "@/components/badge"

const statusColors = {
  open: "bg-red-500/10 text-red-500 border-red-500/20",
  "in-progress": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  resolved: "bg-green-500/10 text-green-500 border-green-500/20",
}

const priorityColors = {
  low: "bg-slate-500/10 text-slate-500 border-slate-500/20",
  medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  high: "bg-red-500/10 text-red-500 border-red-500/20",
}

interface Ticket {
  id: string
  title: string
  customer: string
  assignee: string
  status: "open" | "in-progress" | "resolved"
  priority: "low" | "medium" | "high"
  updated: string
}

interface TicketsTableRowProps {
  ticket: Ticket
}

export function TicketsTableRow({ ticket }: TicketsTableRowProps) {
  return (
    <tr className="border-b border-gray-200 hover:bg-muted/50 transition-colors cursor-pointer">
      <td className="p-4">
        <Link href={`/tickets/${ticket.id}`} className="font-medium text-primary hover:underline">
          {ticket.id}
        </Link>
      </td>
      <td className="p-4">
        <Link href={`/tickets/${ticket.id}`} className="hover:underline">
          {ticket.title}
        </Link>
      </td>
      <td className="p-4 text-sm">{ticket.customer}</td>
      <td className="p-4 text-sm">{ticket.assignee}</td>
      <td className="p-4">
        <Badge variant="outline" className={statusColors[ticket.status]}>
          {ticket.status.replace("-", " ")}
        </Badge>
      </td>
      <td className="p-4">
        <Badge variant="outline" className={priorityColors[ticket.priority]}>
          {ticket.priority}
        </Badge>
      </td>
      <td className="p-4 text-sm text-muted-foreground">{ticket.updated}</td>
    </tr>
  )
}