"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MetricsGrid } from "@/components/dashboard/analytics/MetricsGrid"
import { AnalyticsCharts } from "@/components/dashboard/analytics/AnalyticsCharts"
import { PerformanceLists } from "@/components/dashboard/analytics/PerformanceLists"
import { cn } from "@/lib/utils"
import { 
  LINE_CHART_DATA, PIE_CHART_DATA,
  METRICS_DATA, TOP_AGENTS_DATA, COMMON_ISSUES_DATA
} from "@/components/dashboard/analytics/data"

type TimeRange = "day" | "week" | "month" | "quarter"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("week")

  // ✅ DYNAMIC DATA FOR ALL COMPONENTS
  const currentMetrics = METRICS_DATA[timeRange]
  const currentTopAgents = TOP_AGENTS_DATA[timeRange]
  const currentCommonIssues = COMMON_ISSUES_DATA[timeRange]
  const currentLineData = LINE_CHART_DATA[timeRange]
  const currentPieData = PIE_CHART_DATA[timeRange]

  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your support team performance and metrics</p>
        </div>
          {/* <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {(["day", "week", "month", "quarter"] as TimeRange[]).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                className={cn(
                  "capitalize font-medium px-4",
                  timeRange === range && "shadow-lg shadow-primary/10"
                )}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div> */}
        <div className="bg-white p-4 rounded-2xl space-y-4">
          {/* Time Range Filter */}
          <div className="flex gap-2 flex-wrap">
            {(["day", "week", "month", "quarter"] as const).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                className="capitalize"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
          {/* Dynamic Metrics */}
          <MetricsGrid metrics={currentMetrics} />

          {/* Dynamic Charts */}
          <AnalyticsCharts
            lineChartData={currentLineData}
            pieChartData={currentPieData}
            timeRange={timeRange}
          />

          {/* Dynamic Performance Lists */}
          <PerformanceLists
            topAgents={currentTopAgents}
            commonIssues={currentCommonIssues}
            // timeRange={timeRange}
          />
        </div>
      </div>
    </div>
  )
}
