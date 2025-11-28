// import { Button } from "@/components/button"

// interface AuthToggleProps {
//   isLogin: boolean
//   setIsLogin: (value: boolean) => void
// }

// export default function AuthToggle({ isLogin, setIsLogin }: AuthToggleProps) {
//   return (
//     <div className="flex justify-center gap-4">
//       <Button
//         variant={isLogin ? "default" : "outline"}
//         className="w-32 transition-all"
//         onClick={() => setIsLogin(true)}
//       >
//         Sign In
//       </Button>
//       <Button
//         variant={!isLogin ? "default" : "outline"}
//         className="w-32 transition-all"
//         onClick={() => setIsLogin(false)}
//       >
//         Sign Up
//       </Button>
//     </div>
//   )
// }

interface AuthToggleProps {
  isLogin: boolean
  setIsLogin: (value: boolean) => void
}

export default function AuthToggle({ isLogin, setIsLogin }: AuthToggleProps) {
  return (
    <div className="flex justify-center border-0 rounded-t-xl bg-transparent">
      <button
        className={`w-full px-6 py-2 -mb-px font-medium transition-colors rounded-tl-xl py-4 ${
          isLogin
            ? "border-0  text-blue-500"
            : "bg-gray-200 text-gray-500 hover:text-gray-700 hover: cursor-pointer shadow-inner-br"
        }`}
        onClick={() => setIsLogin(true)}
      >
        Sign In
      </button>
      <button
        className={`w-full px-6 py-2 -mb-px font-medium transition-colors rounded-tr-xl py-4 ${
          !isLogin
            ? "border-0  text-blue-500"
            : "bg-gray-200 text-gray-500 hover:text-gray-700 hover hover: cursor-pointer shadow-inner-bl"
        }`}
        onClick={() => setIsLogin(false)}
      >
        Sign Up
      </button>
    </div>
  )
}
