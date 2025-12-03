import { 
  LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import type { LineChartData, PieChartData } from "./data"

interface AnalyticsChartsProps {
  lineChartData: LineChartData[]
  pieChartData: PieChartData[]
  timeRange: string  // ✅ NEW: Pass time range
}

const COLORS = ["#10b981", "#3b82f6", "#ef4444"]

export function AnalyticsCharts({ 
  lineChartData, 
  pieChartData, 
  timeRange 
}: AnalyticsChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Tickets & Messages Over Time</CardTitle>
          <CardDescription>
            {timeRange === "day" ? "Today's trend" : 
             timeRange === "week" ? "This week" : 
             timeRange === "month" ? "This month" : "This quarter"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              {/* <XAxis dataKey="date" stroke="var(--color-muted-foreground)" /> */}
              
              <XAxis 
                dataKey="date" 
                stroke="#666666"
                // stroke="hsl(var(--foreground-rgb))" 
                strokeWidth={1.5}  
                fontSize={12}
                tickMargin={8}
              />
              {/* <YAxis stroke="var(--color-muted-foreground)" /> */}
              <YAxis 
                stroke="#666666"
                strokeWidth={1.5} 
                fontSize={12}
                tickMargin={8}
              />
              
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="tickets" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6" }} />
              <Line type="monotone" dataKey="messages" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
              <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Ticket Status</CardTitle>
          <CardDescription>Current distribution</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center px-2">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
