"use client"

import { useState } from "react"
import { BrandingSection } from "./BrandingSection"
import AuthCard from "./AuthCard"

export default function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <BrandingSection />
        <AuthCard isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  )
}