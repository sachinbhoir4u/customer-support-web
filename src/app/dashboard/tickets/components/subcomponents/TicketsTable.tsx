import { TicketsTableRow } from "./TicketsTableRow"

interface Ticket {
  id: string
  title: string
  customer: string
  assignee: string
  status: "open" | "in-progress" | "resolved"
  priority: "low" | "medium" | "high"
  updated: string
}

interface TicketsTableProps {
  tickets: Ticket[]
}

export function TicketsTable({ tickets }: TicketsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-4 font-semibold text-muted-foreground">Ticket ID</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Title</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Customer</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Assignee</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Priority</th>
            <th className="text-left p-4 font-semibold text-muted-foreground">Updated</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <TicketsTableRow key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  )
}