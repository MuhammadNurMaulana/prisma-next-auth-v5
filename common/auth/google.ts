"use server"
import { signIn } from "./auth"

export const googleAuth = async () => {
  await signIn("google", {
    redirectTo: "/",
  })
}
