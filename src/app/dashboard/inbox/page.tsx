import InboxLayout from "./InboxLayout"

export default function Page() {
  return <InboxLayout />
}

// "use client"

// import { useState } from "react"
// import { Input } from "@/components/input"
// import { Button } from "@/components/button"
// import { Card } from "@/components/card"
// import MessageCard  from "./components/MessageCard"
// import { Search, Filter, Archive, Trash2 } from "lucide-react"

// const mockMessages = [
//   {
//     id: "1",
//     senderName: "Sarah Johnson",
//     message: "Hi, I need help with my account. I cannot log in.",
//     timestamp: "2 minutes ago",
//     channel: "email" as const,
//     priority: "high" as const,
//     unread: true,
//   },
//   {
//     id: "2",
//     senderName: "Mike Chen",
//     message: "Can you provide information about your enterprise plan?",
//     timestamp: "5 minutes ago",
//     channel: "chat" as const,
//     priority: "medium" as const,
//     unread: true,
//   },
//   {
//     id: "3",
//     senderName: "Emma Davis",
//     message: "Thanks for your help! Issue resolved.",
//     timestamp: "1 hour ago",
//     channel: "whatsapp" as const,
//     unread: false,
//   },
//   {
//     id: "4",
//     senderName: "John Smith",
//     message: "When will the new features be available?",
//     timestamp: "3 hours ago",
//     channel: "twitter" as const,
//     unread: false,
//   },
//   {
//     id: "5",
//     senderName: "Lisa Wang",
//     message: "Interested in a demo of your platform",
//     timestamp: "5 hours ago",
//     channel: "email" as const,
//     priority: "medium" as const,
//     unread: false,
//   },
// ]

// export default function InboxPage() {
//   const [messages, setMessages] = useState(mockMessages)
//   const [selectedMessages, setSelectedMessages] = useState<string[]>([])
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterChannel, setFilterChannel] = useState<string | null>(null)

//   const filteredMessages = messages.filter((msg) => {
//     const matchesSearch =
//       msg.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       msg.message.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesFilter = !filterChannel || msg.channel === filterChannel
//     return matchesSearch && matchesFilter
//   })

//   const unreadCount = messages.filter((m) => m.unread).length
//   const selectedCount = selectedMessages.length

//   const handleSelectAll = () => {
//     if (selectedCount === filteredMessages.length) {
//       setSelectedMessages([])
//     } else {
//       setSelectedMessages(filteredMessages.map((m) => m.id))
//     }
//   }

//   return (
//     <div className="p-6">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h1 className="text-3xl font-bold">Inbox</h1>
//               <p className="text-muted-foreground mt-2">{unreadCount} unread messages</p>
//             </div>
//           </div>

//           {/* Search and Filters */}
//           <Card className="p-4">
//             <div className="space-y-4">
//               <div className="flex gap-2">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
//                   <Input
//                     placeholder="Search messages..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//                 <Button variant="outline" size="icon">
//                   <Filter size={18} />
//                 </Button>
//               </div>

//               {/* Channel Filter Buttons */}
//               <div className="flex gap-2 flex-wrap">
//                 {["email", "chat", "whatsapp", "twitter"].map((channel) => (
//                   <Button
//                     key={channel}
//                     variant={filterChannel === channel ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setFilterChannel(filterChannel === channel ? null : channel)}
//                   >
//                     {channel.charAt(0).toUpperCase() + channel.slice(1)}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Messages List */}
//         <div className="space-y-3">
//           {/* Bulk Actions */}
//           {selectedCount > 0 && (
//             <Card className="p-4 bg-accent/5 border-primary/30">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm font-medium">{selectedCount} selected</span>
//                 <div className="flex gap-2">
//                   <Button size="sm" variant="ghost">
//                     <Archive size={16} className="mr-1" />
//                     Archive
//                   </Button>
//                   <Button size="sm" variant="ghost" className="text-destructive">
//                     <Trash2 size={16} className="mr-1" />
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           )}

//           {/* Message List Header */}
//           <div className="flex items-center gap-3 px-4 py-2 border-b border-border">
//             <input
//               type="checkbox"
//               checked={selectedCount === filteredMessages.length && filteredMessages.length > 0}
//               onChange={handleSelectAll}
//               className="w-4 h-4 rounded"
//             />
//             <span className="text-xs text-muted-foreground font-medium">SELECT ALL</span>
//           </div>

//           {/* Messages */}
//           {filteredMessages.length > 0 ? (
//             filteredMessages.map((message) => (
//               <div key={message.id} className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   checked={selectedMessages.includes(message.id)}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedMessages([...selectedMessages, message.id])
//                     } else {
//                       setSelectedMessages(selectedMessages.filter((id) => id !== message.id))
//                     }
//                   }}
//                   className="w-4 h-4 rounded"
//                 />
//                 <div className="flex-1">
//                   <MessageCard {...message} />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No messages found</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
