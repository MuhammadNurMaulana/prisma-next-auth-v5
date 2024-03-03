import { authConfig } from "@/common/auth/auth"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const isLogin = !!req.auth
  // req.auth
  console.log("ISLOGIN :", isLogin)
  console.log("ROUTE :", req.nextUrl.pathname)
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
