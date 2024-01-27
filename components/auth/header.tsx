import { cn } from "@/lib/utils"
import { KeyRound } from "lucide-react"
import { Poppins } from "next/font/google"

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

type Props = {
  label: string
}

const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "flex gap-x-2 items-center justify-center text-3xl font-semibold",
          fonts.className
        )}
      >
        <KeyRound color="#ffc83d" size={28} absoluteStrokeWidth />
        <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default Header
