// ✅ PROPERLY TYPED FOR RECHARTS
export interface LineChartData {
  date: string
  tickets: number
  messages: number
  resolved: number
  [key: string]: string | number
}

export interface BarChartData {
  channel: string
  value: number
  [key: string]: string | number
}

export interface PieChartData {
  name: string
  value: number
  [key: string]: string | number
}

// ✅ DIFFERENT DATA FOR EACH TIME RANGE
export const LINE_CHART_DATA = {
  day: [
    { date: "09:00", tickets: 12, messages: 18, resolved: 10 },
    { date: "12:00", tickets: 18, messages: 25, resolved: 15 },
    { date: "15:00", tickets: 22, messages: 32, resolved: 20 },
    { date: "18:00", tickets: 28, messages: 40, resolved: 25 },
    { date: "21:00", tickets: 15, messages: 22, resolved: 12 },
  ],
  week: [
    { date: "Mon", tickets: 24, messages: 40, resolved: 18 },
    { date: "Tue", tickets: 34, messages: 55, resolved: 24 },
    { date: "Wed", tickets: 28, messages: 48, resolved: 22 },
    { date: "Thu", tickets: 42, messages: 68, resolved: 35 },
    { date: "Fri", tickets: 38, messages: 62, resolved: 32 },
    { date: "Sat", tickets: 45, messages: 75, resolved: 40 },
    { date: "Sun", tickets: 52, messages: 88, resolved: 45 },
  ],
  month: [
    { date: "Week 1", tickets: 120, messages: 200, resolved: 95 },
    { date: "Week 2", tickets: 145, messages: 240, resolved: 120 },
    { date: "Week 3", tickets: 132, messages: 215, resolved: 110 },
    { date: "Week 4", tickets: 168, messages: 285, resolved: 145 },
  ],
  quarter: [
    { date: "Jan", tickets: 380, messages: 650, resolved: 320 },
    { date: "Feb", tickets: 420, messages: 720, resolved: 360 },
    { date: "Mar", tickets: 450, messages: 780, resolved: 390 },
  ],
}

export const BAR_CHART_DATA = {
  day: [
    { channel: "Email", value: 45 },
    { channel: "Chat", value: 35 },
    { channel: "WhatsApp", value: 28 },
    { channel: "Twitter", value: 15 },
  ],
  week: [
    { channel: "Email", value: 340 },
    { channel: "Chat", value: 280 },
    { channel: "WhatsApp", value: 220 },
    { channel: "Twitter", value: 150 },
  ],
  month: [
    { channel: "Email", value: 1250 },
    { channel: "Chat", value: 980 },
    { channel: "WhatsApp", value: 750 },
    { channel: "Twitter", value: 420 },
  ],
  quarter: [
    { channel: "Email", value: 3800 },
    { channel: "Chat", value: 2900 },
    { channel: "WhatsApp", value: 2200 },
    { channel: "Twitter", value: 1300 },
  ],
}

export const PIE_CHART_DATA = {
  day: [
    { name: "Resolved", value: 70 },
    { name: "In Progress", value: 20 },
    { name: "Open", value: 10 },
  ],
  week: [
    { name: "Resolved", value: 65 },
    { name: "In Progress", value: 20 },
    { name: "Open", value: 15 },
  ],
  month: [
    { name: "Resolved", value: 72 },
    { name: "In Progress", value: 18 },
    { name: "Open", value: 10 },
  ],
  quarter: [
    { name: "Resolved", value: 78 },
    { name: "In Progress", value: 15 },
    { name: "Open", value: 7 },
  ],
}

export const METRICS_DATA = {
  day: [
    { label: "Total Tickets", value: "95", change: 8, trend: "up" as const },
    { label: "Avg Response Time", value: "28m", change: -12, trend: "down" as const },
    { label: "Customer Satisfaction", value: "96%", change: 2, trend: "up" as const },
    { label: "Resolution Rate", value: "89%", change: 4, trend: "up" as const },
  ],
  week: [
    { label: "Total Tickets", value: "284", change: 12, trend: "up" as const },
    { label: "Avg Response Time", value: "45m", change: -8, trend: "down" as const },
    { label: "Customer Satisfaction", value: "94%", change: 3, trend: "up" as const },
    { label: "Resolution Rate", value: "87%", change: 5, trend: "up" as const },
  ],
  month: [
    { label: "Total Tickets", value: "1,247", change: 18, trend: "up" as const },
    { label: "Avg Response Time", value: "42m", change: -5, trend: "down" as const },
    { label: "Customer Satisfaction", value: "95%", change: 4, trend: "up" as const },
    { label: "Resolution Rate", value: "90%", change: 7, trend: "up" as const },
  ],
  quarter: [
    { label: "Total Tickets", value: "3,847", change: 22, trend: "up" as const },
    { label: "Avg Response Time", value: "40m", change: -10, trend: "down" as const },
    { label: "Customer Satisfaction", value: "96%", change: 5, trend: "up" as const },
    { label: "Resolution Rate", value: "92%", change: 9, trend: "up" as const },
  ],
}

export const TOP_AGENTS_DATA = {
  day: [
    { name: "John Doe", resolved: 28, score: 98 },
    { name: "Emma Davis", resolved: 24, score: 96 },
    { name: "Alex Turner", resolved: 22, score: 94 },
    { name: "Sarah Chen", resolved: 21, score: 92 },
  ],
  week: [
    { name: "John Doe", resolved: 156, score: 98 },
    { name: "Emma Davis", resolved: 142, score: 96 },
    { name: "Alex Turner", resolved: 128, score: 94 },
    { name: "Sarah Chen", resolved: 115, score: 91 },
  ],
  month: [
    { name: "John Doe", resolved: 678, score: 97 },
    { name: "Emma Davis", resolved: 645, score: 96 },
    { name: "Alex Turner", resolved: 589, score: 95 },
    { name: "Sarah Chen", resolved: 532, score: 93 },
  ],
  quarter: [
    { name: "John Doe", resolved: 1892, score: 98 },
    { name: "Emma Davis", resolved: 1784, score: 97 },
    { name: "Alex Turner", resolved: 1623, score: 96 },
    { name: "Sarah Chen", resolved: 1456, score: 94 },
  ],
}

export const COMMON_ISSUES_DATA = {
  day: [
    { issue: "Login Problems", count: 23, trend: "up" as const },
    { issue: "Billing Questions", count: 18, trend: "down" as const },
    { issue: "Integration Help", count: 15, trend: "up" as const },
    { issue: "Feature Requests", count: 12, trend: "stable" as const },
  ],
  week: [
    { issue: "Login Problems", count: 234, trend: "up" as const },
    { issue: "Billing Questions", count: 189, trend: "down" as const },
    { issue: "Integration Help", count: 145, trend: "up" as const },
    { issue: "Feature Requests", count: 98, trend: "stable" as const },
  ],
  month: [
    { issue: "Login Problems", count: 1023, trend: "up" as const },
    { issue: "Billing Questions", count: 789, trend: "down" as const },
    { issue: "Integration Help", count: 645, trend: "up" as const },
    { issue: "Feature Requests", count: 423, trend: "stable" as const },
  ],
  quarter: [
    { issue: "Login Problems", count: 3234, trend: "up" as const },
    { issue: "Billing Questions", count: 2345, trend: "down" as const },
    { issue: "Integration Help", count: 1987, trend: "up" as const },
    { issue: "Feature Requests", count: 1234, trend: "stable" as const },
  ],
}