// app/layout.tsx
import "./globals.css"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { LoadingProvider } from "@/context/LoadingContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased dark">
        <LoadingProvider>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            {children}
          </GoogleOAuthProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}