import { CardContent, CardTitle, CardDescription } from "@/components/card"
import { Badge } from "@/components/badge"

interface TicketMetadataProps {
  title: string
  id: string
  status: string
  priority: string
  customer: string
  email: string
  assignee: string
  created: string
  description: string
}
const statusColors = {
  open: "bg-red-500/10 text-red-500",
  "in-progress": "bg-blue-500/10 text-blue-500",
  resolved: "bg-green-500/10 text-green-500",
}

const priorityColors = {
  low: "bg-slate-500/10 text-slate-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  high: "bg-red-500/10 text-red-500",
}
export function TicketMetadata({ title, id, status, priority, customer, email, assignee, created, description }: TicketMetadataProps) {
  return (
    <CardContent className="space-y-4">
        <div className=" flex items-start justify-between">
            <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="mt-2">Ticket {id}</CardDescription>
            </div>
            <div className="flex gap-2">
            <Badge variant="outline" className={statusColors[status as keyof typeof statusColors]}>
                {status}
            </Badge>
            <Badge variant="outline" className={priorityColors[priority as keyof typeof priorityColors]}>
                {priority}
            </Badge>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div>
                <p className="text-sm text-muted-foreground">Customer</p>
                <p className="font-medium">{customer}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Assigned to</p>
                <p className="font-medium">{assignee}</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="font-medium">{created}</p>
            </div>
        </div>
        <div>
            <p className="text-sm text-muted-foreground mb-2">Description</p>
            <p className="text-foreground">{description}</p>
        </div>
    </CardContent>
  )
}