import React from "react"

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layouts Dashboard</h1>
      {children}
    </div>
  )
}
