"use client"
import { register } from "@/common/auth/register"
import { FormEvent } from "react"

export default function RegisterPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
    }

    const cek = register(body)

    console.log(cek.then((res) => console.log(res.message)))
  }

  return (
    <div>
      <form className="bg-red-500" onSubmit={handleSubmit}>
        <h1>Form Test</h1>

        <div className="grid gap-3">
          <div className="grid">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="grid">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
