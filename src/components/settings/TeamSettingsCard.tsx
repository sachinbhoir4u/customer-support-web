"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import { useToast } from "@/components/use-toast"

export function TeamSettingsCard() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    teamName: "Acme Support",
    supportEmail: "support@acme.com",
    replyEmail: "noreply@acme.com",
    timezone: "America/New_York",
    language: "en",
  })

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your team settings have been updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Settings</CardTitle>
        <CardDescription>Configure your team name, emails, and regional preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Team Name</Label>
            <Input
              value={settings.teamName}
              onChange={(e) => setSettings({ ...settings, teamName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Support Email</Label>
            <Input
              type="email"
              value={settings.supportEmail}
              onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Reply-To Email</Label>
            <Input
              type="email"
              value={settings.replyEmail}
              onChange={(e) => setSettings({ ...settings, replyEmail: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Default Language</Label>
            <Select value={settings.language} onValueChange={(v) => setSettings({ ...settings, language: v })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">French</SelectItem>
                <SelectItem value="fr">German</SelectItem>
                <SelectItem value="de">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Select value={settings.timezone} onValueChange={(v) => setSettings({ ...settings, timezone: v })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/New_York">Eastern Time (EST)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (CST)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (MST)</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time (PST)</SelectItem>
                <SelectItem value="Asia/Kolkata">India Standard Time (IST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="solid" onClick={handleSave}>Save Changes</Button>
      </CardContent>
    </Card>
  )
}