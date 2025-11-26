// src/components/Loader.tsx
import { cn } from "@/lib/utils"

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  label?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
}

export function Loader({ size = "md", className, label = "Loading..." }: LoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
      <div
        className={cn(
          "animate-spin rounded-full border-4 border-gray-300 border-t-blue-600",
          sizeClasses[size],
          className
        )}
        role="status"
        aria-label={label}
      />
      {label && (
        <p className="text-xl text-muted-foreground animate-pulse">{label}</p>
      )}
    </div>
    </div>
  )
}