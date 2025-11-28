"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { ArrowLeft } from "lucide-react"

export default function NewTicketPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    customer: "",
    email: "",
    description: "",
    priority: "medium",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //Submit ticket to backend
    router.push("/dashboard/tickets")
  }

  return (
    <div >
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Create New Ticket</h1>

          <Button variant="outline" onClick={() => router.back()} className="gap-2">
            <ArrowLeft size={18} />
            Back
          </Button>
        </div>
        <Card className="bg-white border-gray-100 gap-2">
          <CardHeader>
            <CardTitle>Create a new support ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ticket title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-input border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="customer" className="text-sm font-medium">
                    Customer Name
                  </label>
                  <Input
                    id="customer"
                    name="customer"
                    placeholder="John Doe"
                    value={formData.customer}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the issue..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full min-h-32 px-3 py-2 bg-input border border-input border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  required
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button variant="solid" type="submit">Create Ticket</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
