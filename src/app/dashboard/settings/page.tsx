"use client"

import { TeamSettingsCard } from "@/components/settings/TeamSettingsCard"
// import { TeamMembersCard } from "@/components/settings/TeamMembersCard"
import { NotificationPreferencesCard } from "@/components/settings/NotificationPreferencesCard"

export default function SettingsPage() {
  return (
    <div>
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground mt-1">Manage your team, notifications, and support preferences</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-1">
                <TeamSettingsCard />
                <NotificationPreferencesCard />
                {/* <TeamMembersCard /> */}
            </div>
        </div>
    </div>
  )
}