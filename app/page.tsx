import { auth, signIn, signOut } from "@/common/auth/auth"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <p className="font-bold text-green-500">Hellow World</p>
      <h1>{JSON.stringify(session)}</h1>

      <Button size={"lg"} variant={"custom"}>
        Click Me
      </Button>
    </div>
  )
}
