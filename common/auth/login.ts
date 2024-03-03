"use server"

import { signIn } from "./auth"

export const login = async (body: any) => {
  const { email, password } = body

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  })
}
