"use server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "./user"

export const register = async (body: any) => {
  const { email, password, name } = body

  const hashedPassword = await bcrypt.hash(password, 10)

  const existUser = await getUserByEmail(email)

  if (existUser) {
    return {
      success: false,
      message: "User Already Exist",
    }
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  return {
    success: true,
    message: "Register Success",
  }
}
