import { getCurrentUser } from "@/lib/session"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return new Response("Unauthorized", { status: 403 })
    }

    const body = await req.json()
    console.log(body)

    return new Response(JSON.stringify(body))
  } catch (error) {}
}
