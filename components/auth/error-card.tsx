import Header from "@/components/auth/header"
import BackButton from "@/components/auth/back-button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { CardWrapper } from "@/components/auth/card-wrapper"
import { AlertTriangle } from "lucide-react"

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <AlertTriangle className="h-4 w-4" color="#ff2865" />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
