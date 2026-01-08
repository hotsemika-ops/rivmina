"use client"

import { useState } from "react"
import LoginForm from "@/components/login-form"
import VideoDashboard from "@/components/video-dashboard"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const handleLogin = (email: string) => {
    setIsAuthenticated(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserEmail("")
  }

  return (
    <main className="min-h-screen bg-background">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <VideoDashboard userEmail={userEmail} onLogout={handleLogout} />
      )}
    </main>
  )
}
