"use client"

import { useSession } from "next-auth/react"

export default function ClientPage() {
  const { data: session } = useSession()
  if (!session || !session.user) return <div className="text-red-500">You Must Sign In</div>
  return (
    <div>
      <h1>This Is Client Page and must be protected</h1>
    </div>
  )
}
