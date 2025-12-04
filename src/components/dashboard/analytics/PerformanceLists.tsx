import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PerformanceListsProps {
  topAgents: Array<{ name: string; resolved: number; score: number }>
  commonIssues: Array<{ issue: string; count: number; trend: "up" | "down" | "stable" }>
}

export function PerformanceLists({ topAgents, commonIssues }: PerformanceListsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Top Agents */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top Performing Agents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topAgents.map((agent, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{agent.name}</p>
                  <p className="text-sm text-muted-foreground">{agent.resolved} resolved</p>
                </div>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
                  {agent.score}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Common Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {commonIssues.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.issue}</p>
                  <p className="text-sm text-muted-foreground">{item.count} tickets</p>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    item.trend === "up"
                      ? "bg-red-500/10 text-red-500 border-red-500/30"
                      : item.trend === "down"
                        ? "bg-green-500/10 text-green-500 border-green-500/30"
                        : "bg-slate-500/10 text-slate-500 border-slate-500/30"
                  )}
                >
                  {item.trend}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}