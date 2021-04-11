import React from "react"

export interface FullPageErrorFallbackProps {
  error: any
}
const FullPageErrorFallback: React.FC<FullPageErrorFallbackProps> = () => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center h-full text-red-500"
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      {/* <pre>{error.message}</pre> */}
    </div>
  )
}

export default FullPageErrorFallback
