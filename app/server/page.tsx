import { auth } from "@/common/auth/auth"

export default async function ServerPage() {
  const session = await auth()
  if (!session || !session.user) return <div>You Must Sign In</div>
  return <div>ServerPage</div>
}
