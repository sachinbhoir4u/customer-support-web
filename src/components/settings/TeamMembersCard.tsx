"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Avatar, AvatarFallback } from "@/components/avatar"
import { useState } from "react"
import { useToast } from "@/components/use-toast"

const members = [
  { id: "1", name: "John Doe", email: "john@acme.com", role: "Admin", status: "active" },
  { id: "2", name: "Emma Davis", email: "emma@acme.com", role: "Agent", status: "active" },
  { id: "3", name: "Alex Turner", email: "alex@acme.com", role: "Agent", status: "invited" },
  { id: "4", name: "Sarah Chen", email: "sarah@acme.com", role: "Agent", status: "active" },
]

export function TeamMembersCard() {
  const { toast } = useToast()
  const [isInviting, setIsInviting] = useState(false)

  const handleInvite = () => {
    setIsInviting(true)
    setTimeout(() => {
      toast({ title: "Invitation sent!", description: "Check your email for the invite link." })
      setIsInviting(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Team Members</CardTitle>
        <Button size="sm" onClick={handleInvite} disabled={isInviting}>
          {isInviting ? "Sending..." : "+ Invite Member"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">{member.role}</Badge>
                <Badge
                  variant={member.status === "active" ? "default" : "secondary"}
                  className={member.status === "active" ? "bg-green-500/10 text-green-600" : ""}
                >
                  {member.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}