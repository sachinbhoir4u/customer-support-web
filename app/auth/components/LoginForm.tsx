"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/ui_components/button"
import { Input } from "@/ui_components/input"
import { Label } from "@/ui_components/label"
import { Eye, EyeOff } from "lucide-react"
import { GoogleLogin } from "@react-oauth/google"
import type { CredentialResponse } from "@react-oauth/google"

// Zod schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data)
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  // const handleGoogleSuccess = (credentialResponse: any) => {
  //   console.log("Google Login Success:", credentialResponse)
  //   // Send credential to your backend or decode JWT
  // }

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
  console.log("Google Login Success:", credentialResponse)
  
  // The actual JWT token (what you send to your backend)
  const token = credentialResponse.credential
  if (token) {
    // Send to your backend: /api/auth/google
    // Example: await fetch("/api/auth/google", { method: "POST", body: JSON.stringify({ token }) })
    console.log("Google ID Token:", token)
  }
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="login-password">Password</Label>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button variant="solid" type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => console.log("Google Login Failed")}
          useOneTap
          theme="outline"
          size="large"
          text="continue_with"
          width="350"
        />
      </div>
    </motion.div>
  )
}