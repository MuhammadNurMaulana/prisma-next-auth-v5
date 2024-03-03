"use client"
import { signIn } from "@/common/auth/auth"
import { googleAuth } from "@/common/auth/google"
import { login } from "@/common/auth/login"
import { FormEvent } from "react"

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    login(body)
  }

  return (
    <div>
      <form className="bg-red-500" onSubmit={handleSubmit}>
        <h1>Form Test</h1>

        <div className="grid gap-3">
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="grid">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
