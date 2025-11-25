"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <p className="text-lg text-muted-foreground">Customer support platform</p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/auth/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
