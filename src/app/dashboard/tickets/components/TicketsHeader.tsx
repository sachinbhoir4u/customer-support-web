import { Plus } from "lucide-react"
import { Button } from "@/components/button"
import Link from "next/link"

interface TicketsHeaderProps {
  openCount: number
  inProgressCount: number
}

export function TicketsHeader({ openCount, inProgressCount }: TicketsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <p className="text-muted-foreground pt-1">
          {openCount} open, {inProgressCount} in progress
        </p>
      </div>
      <Button variant="solid" asChild>
        <Link href="/dashboard/tickets/new">
          <Plus size={18} className="mr-0 text-white " />
          New Ticket
        </Link>
      </Button>
    </div>
  )
}