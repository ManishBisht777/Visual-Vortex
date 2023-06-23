import openai from "@/openai/openai"
import { ResponseTypes } from "openai-edge"

import { getCurrentUser } from "@/lib/session"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return new Response("Unauthorized", { status: 403 })
    }

    const body = await req.json()
    console.log(body)

    const image = await openai.createImage({
      prompt: body.input,
      n: 1,
      size: "256x256",
      response_format: "url",
    })

    const data = await image.json()
    const url = data.data?.[0]?.url

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    })
  } catch (error) {
    console.log(error)
  }
}
