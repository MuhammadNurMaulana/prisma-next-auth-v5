import NextAuth, { NextAuthConfig } from "next-auth"
import google from "next-auth/providers/google"

const config = {
  providers: [google],
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)