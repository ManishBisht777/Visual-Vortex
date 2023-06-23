"use client"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem } from "@/components/form/form"
import { Icons } from "@/components/icons"

import { Skeleton } from "./ui/skeleton"

type Props = {}
const FormSchema = z.object({
  promptInput: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function PromptInput({}: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [image, setImage] = useState({
    url: "",
  })
  const [loading, setIsloading] = useState(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsloading(true)
    setImage({
      url: "",
    })
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: data.promptInput,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setIsloading(false)
      setImage(data)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2">
          <div className="flex gap-2 items-center border px-6 py-2 rounded-lg dark:bg-slate-900">
            <Icons.search className="w-4 h-4" />
            <FormField
              control={form.control}
              name="promptInput"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Type your prompt here"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={!form.formState.isDirty || !form.formState.isValid}
            >
              Generate
            </Button>

            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </form>
        <div className="text-sm flex gap-2 my-2 text-slate-400">
          <span className="font-semibold bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            Tip
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        {image.url && <img src={image.url} alt="hi" />}
        {loading && (
          <Skeleton className="dark:bg-slate-600 bg-slate-400 h-[256px] w-[256px]" />
        )}
      </Form>
    </>
  )
}
