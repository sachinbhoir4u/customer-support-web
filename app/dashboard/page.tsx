import Link from "next/link"
import { Button } from "@/ui_components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui_components/card"

const modules = [
  {
    title: "Inbox",
    description: "Unified inbox for all customer messages",
    href: "/dashboard/inbox",
  },
  {
    title: "Tickets",
    description: "Manage and track customer support tickets",
    href: "/dashboard/tickets",
  },
]

export default function DashboardPage() {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome to Customer Support. Select a module to get started.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <Card key={module.href} className="hover:border-primary transition-colors cursor-pointer border-gray-300 hover:shadow-lg hover:scale-101">
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" asChild className="w-full">
                  <Link href={module.href}>Access Module</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
