"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem } from "@/components/form/form"
import { Icons } from "@/components/icons"

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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: data.promptInput,
      }),
    })
  }

  return (
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
    </Form>
  )
}
