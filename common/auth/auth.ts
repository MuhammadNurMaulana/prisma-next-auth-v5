import bcrypt from "bcryptjs"
import NextAuth, { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import { getUserByEmail } from "./user"

const credentialsConfig = credentials({
  name: "Credentials",
  credentials: {
    email: {},
    password: {},
  },

  async authorize(credentials) {
    const { email, password } = credentials as { email: string; password: string }

    if (email && password) {
      const user = await getUserByEmail(email)
      if (!user || !user.password) return null

      const passMatch = await bcrypt.compare(password, user.password)

      if (passMatch) return user
    }

    return null
  },
})

export const authConfig = {
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },

  providers: [credentialsConfig],

  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
