import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="container mt-10 flex flex-col items-center">
      <div className="flex gap-2 items-center border px-6 py-2 rounded-lg dark:bg-slate-900 bg-slate-100 w-1/2">
        <Icons.search className="w-6 h-6" />
        <Input
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Type your prompt here"
        />
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <h2 className="md:text-4xl font-bold mt-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        Search Term
      </h2>
      <p className="text-slate-400 mt-2">
        10,000+ beautiful, modern minimal store designs for inspiration
      </p>

      <div className="mt-10 grid grid-cols-4 gap-6">
        <div className=" p-2 rounded-xl dark:bg-slate-900 bg-slate-100 border-2">
          <div className="dark:bg-black bg-white p-4 rounded-xl flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Manish</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Bisht</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* image */}
            <div className="bg-gradient-to-r from-sky-600 to-cyan-500 w-[15rem] h-[12rem] rounded-md"></div>
            <div className="flex justify-between items-center -my-3">
              <span className="md:text-xl text-lg font-semibold text-center bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                Fancy Name
              </span>
              <span>1499</span>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <Button className="rounded rounded-bl-2xl">Like</Button>
              <Button className="rounded rounded-br-2xl">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className=" p-2 rounded-xl dark:bg-slate-900 bg-slate-100 border-2">
          <div className="dark:bg-black bg-white p-4 rounded-xl flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Manish</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Bisht</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* image */}
            <div className="bg-gradient-to-r from-sky-600 to-cyan-500 w-[15rem] h-[12rem] rounded-md"></div>
            <div className="flex justify-between items-center -my-3">
              <span className="md:text-xl text-lg font-semibold text-center bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                Fancy Name
              </span>
              <span>1499</span>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <Button className="rounded rounded-bl-2xl">Like</Button>
              <Button className="rounded rounded-br-2xl">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className=" p-2 rounded-xl dark:bg-slate-900 bg-slate-100 border-2">
          <div className="dark:bg-black bg-white p-4 rounded-xl flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Manish</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Bisht</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* image */}
            <div className="bg-gradient-to-r from-sky-600 to-cyan-500 w-[15rem] h-[12rem] rounded-md"></div>
            <div className="flex justify-between items-center -my-3">
              <span className="md:text-xl text-lg font-semibold text-center bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                Fancy Name
              </span>
              <span>1499</span>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <Button className="rounded rounded-bl-2xl">Like</Button>
              <Button className="rounded rounded-br-2xl">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className=" p-2 rounded-xl dark:bg-slate-900 bg-slate-100 border-2">
          <div className="dark:bg-black bg-white p-4 rounded-xl flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Manish</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400">Owned by</span>
                  <span className="text-slate-300 text-xs">Bisht</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* image */}
            <div className="bg-gradient-to-r from-sky-600 to-cyan-500 w-[15rem] h-[12rem] rounded-md"></div>
            <div className="flex justify-between items-center -my-3">
              <span className="md:text-xl text-lg font-semibold text-center bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                Fancy Name
              </span>
              <span>1499</span>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <Button className="rounded rounded-bl-2xl">Like</Button>
              <Button className="rounded rounded-br-2xl">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
