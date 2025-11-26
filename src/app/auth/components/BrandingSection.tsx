import { motion } from "framer-motion"

export function BrandingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="hidden md:block text-center lg:text-left space-y-6"
    >
      <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Customer Support
      </h1>
      <div className="space-y-3">
        <p className="text-xl text-muted-foreground">
          AI-powered customer support platform
        </p>
        <p className="text-lg text-muted-foreground">
          Ticketing • Knowledge Base • Smart Chatbot
        </p>
      </div>
      {/* <div className="flex justify-center lg:justify-start gap-4 pt-4">
        {["Ticket", "Book", "Chat"].map((icon, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all hover:scale-110 ${
              i === 0
                ? "bg-blue-100 dark:bg-blue-900/30"
                : i === 1
                ? "bg-purple-100 dark:bg-purple-900/30"
                : "bg-pink-100 dark:bg-pink-900/30"
            }`}
          >
            {icon}
          </div>
        ))}
      </div> */}
    </motion.div>
  )
}