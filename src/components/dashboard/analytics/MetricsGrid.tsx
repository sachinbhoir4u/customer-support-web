import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Metric {
  label: string
  value: string
  change: number
  trend: "up" | "down"
}

interface MetricsGridProps {
  metrics: Metric[]
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <Card key={idx} className="py-2">
          <CardContent className="py-2 ">
            <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">{metric.value}</p>
              <div className={cn(
                "flex items-center gap-1",
                metric.trend === "up" ? "text-green-500" : "text-red-500"
              )}>
                {metric.trend === "up" ? (
                  <TrendingUp size={18} />
                ) : (
                  <TrendingDown size={18} />
                )}
                <span className="text-sm font-medium">{Math.abs(metric.change)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}