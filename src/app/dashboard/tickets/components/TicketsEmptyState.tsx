import { Search } from "lucide-react";
export function TicketsEmptyState() {
  return (
    <div className="text-center py-12">
      <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-lg">No tickets found</p>
      <p className="text-sm text-muted-foreground mt-2">
        Try adjusting your search or filters
      </p>
    </div>
  )
}