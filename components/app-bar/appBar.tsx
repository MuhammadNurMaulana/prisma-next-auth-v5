import { auth, signIn, signOut } from "@/common/auth/auth"
import Image from "next/image"
import Link from "next/link"

export default async function AppBar() {
  const session = await auth()
  return (
    <div>
      <Link href={"/client"}>Client Page</Link>
      <Link href={"/server"}>Server Page</Link>

      {session && session.user ? (
        <div>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          {session.user.image && <Image src={session.user.image} alt="avatar" width={50} height={50} className="rounded-full" />}
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button type="submit">Sign out</button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button type="submit">Sign in Google</button>
        </form>
      )}
    </div>
  )
}
