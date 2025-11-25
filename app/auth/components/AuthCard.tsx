import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui_components/card"
import AuthToggle from "./AuthToggle"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/ui_components/button"

interface AuthCardProps {
  isLogin: boolean
  setIsLogin: (value: boolean) => void
}

export default function AuthCard({ isLogin, setIsLogin }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-0 shadow-2xl backdrop-blur-xl bg-white/90 dark:bg-gray-900/90">
        <CardHeader className="space-y-6 ">
          <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="text-center space-y-2">
            <CardTitle className="text-2xl">
              {isLogin ? "Welcome back" : "Create your account"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your credentials to access your account" : ""}
                {/* : "Start your journey with SupportAI today"} */}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <AnimatePresence mode="wait">
            {isLogin ? <LoginForm key="login" /> : <SignupForm key="signup" />}
          </AnimatePresence>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <Button variant="link"
                  onClick={() => setIsLogin(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button variant="link"
                  onClick={() => setIsLogin(true)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}