import { auth, signIn, signOut } from "@/common/auth/auth"

export default async function AppBar() {
  const session = await auth()
  console.log(session)
  return (
    <div>
      {session && session.user ? (
        <div>
          <p>{session.user.name}</p>
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
            await signIn()
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      )}
    </div>
  )
}
