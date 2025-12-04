"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, MessageSquare } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function NotificationPreferencesCard() {
  const { toast } = useToast()

  const handleToggle = (id: string, checked: boolean) => {
    toast({
      title: "Preferences updated",
      description: `${id} notifications ${checked ? "enabled" : "disabled"}`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notification Preferences
        </CardTitle>
        <CardDescription>Control how and when you receive alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Notifications
              </Label>
              <p className="text-sm text-muted-foreground">New tickets, mentions, and replies</p>
            </div>
            <Switch defaultChecked onCheckedChange={(c) => handleToggle("email", c)} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                In-App Notifications
              </Label>
              <p className="text-sm text-muted-foreground">Real-time alerts in the dashboard</p>
            </div>
            <Switch defaultChecked onCheckedChange={(c) => handleToggle("in-app", c)} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>High Priority Only</Label>
              <p className="text-sm text-muted-foreground">Only notify for urgent tickets</p>
            </div>
            <Switch onCheckedChange={(c) => handleToggle("priority", c)} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily Digest</Label>
              <p className="text-sm text-muted-foreground">Summary email at 9 AM</p>
            </div>
            <Switch defaultChecked onCheckedChange={(c) => handleToggle("digest", c)} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}