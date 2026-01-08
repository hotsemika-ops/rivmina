"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
interface LoginFormProps {
  onLogin: (email: string) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")

  if (!email || !email.includes("@")) {
    setError("Please enter a valid email address")
    return
  }

  try {
    const res = await axios.post("/api/login", {
      email: email,
    })

    if (res.status === 200) {
      onLogin(email) // ✅ success callback
    }
  } catch (err: any) {
    if (err.response?.status === 401) {
      setError("Access denied. This email is not authorized.")
    } else {
      setError("Something went wrong. Please try again.")
    }
  }
}


  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Video Access</h1>
          <p className="text-muted-foreground">Enter your email to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-input rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground border rounded-lg font-medium hover:text-black hover:bg-white bg-black text-white transition-opacity"
          >
            Continue
          </button>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              For any inconvenience please contact +94 71 194 2117
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
