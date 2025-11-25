// import type React from "react"
// import type { Metadata } from "next"
// // import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// export const metadata: Metadata = {
//   title: "SupportAI - Customer Support Platform",
//   description: "AI-powered customer support platform with ticketing, knowledge base, and chatbot",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`font-sans antialiased dark`}>
//         {children}
//         {/* <Analytics /> */}
//       </body>
//     </html>
//   )
// }


// app/layout.tsx
import "./globals.css"
import { GoogleOAuthProvider } from "@react-oauth/google"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased dark">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}