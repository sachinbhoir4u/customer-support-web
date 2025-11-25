import { Button } from "@/ui_components/button"

interface AuthToggleProps {
  isLogin: boolean
  setIsLogin: (value: boolean) => void
}

export default function AuthToggle({ isLogin, setIsLogin }: AuthToggleProps) {
  return (
    <div className="flex justify-center gap-4">
      <Button
        variant={isLogin ? "default" : "outline"}
        className="w-32 transition-all"
        onClick={() => setIsLogin(true)}
      >
        Sign In
      </Button>
      <Button
        variant={!isLogin ? "default" : "outline"}
        className="w-32 transition-all"
        onClick={() => setIsLogin(false)}
      >
        Sign Up
      </Button>
    </div>
  )
}