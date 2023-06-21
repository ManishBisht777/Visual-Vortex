import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="container">
      <section className="flex flex-col items-center gap-8 pb-8 pt-8 md:py-10 justify-center">
        <h1 className="  md:text-8xl text-4xl font-black md:mt-10">
          <span className="animate-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Generate.
          </span>
          <span className="delay-1000 animate-text bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            Sell.
          </span>
          <span className="animate-text bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            Collect.
          </span>
        </h1>
        <p className="text-center md:text-2xl w-2/3">
          Vercel's frontend cloud gives developers the frameworks, workflows,
          and infrastructure to build a faster, more personalized Web.
        </p>
        <div className="flex gap-4 text-xl w-80">
          <Link href="/" className={cn(buttonVariants(), "w-1/2 py-4")}>
            Start Generating
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "w-1/2 py-4")}
          >
            Get A Demo
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2 className="uppercase text-gray-400 font-semibold">
          Explore a new way
        </h2>

        <div className="mt-4">
          <div className="flex flex-col items-center">
            <div className="h-24 w-0.5 bg-gradient-to-t from-purple-700 via-pink-600"></div>
            <span className=" w-10 h-10 bg-gradient-to-r from-purple-700 to-pink-600 flex justify-center items-center rounded-full text-black font-semibold">
              1
            </span>
          </div>
          <h3 className="md:text-2xl font-bold mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Generate
          </h3>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <div className="h-24 w-0.5 bg-gradient-to-t from-sky-600 via-cyan-500"></div>
            <span className=" w-10 h-10 bg-gradient-to-r from-sky-600 to-cyan-500 flex justify-center items-center rounded-full text-black font-semibold">
              1
            </span>
          </div>
          <h3 className="md:text-2xl font-bold mt-2 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            Sell
          </h3>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <div className="h-24 w-0.5 bg-gradient-to-t from-red-500 via-amber-400"></div>
            <span className=" w-10 h-10 bg-gradient-to-r from-red-500 to-amber-400 flex justify-center items-center rounded-full text-black font-semibold">
              1
            </span>
          </div>
          <h3 className="md:text-2xl font-bold mt-2 bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
            Collect
          </h3>
        </div>

        <ul>
          <li>Home Page</li>
          <li>Schema and auth</li>
          <li>Branch 1 - Generate image with ai - /generate</li>
          <li>Branch 2 - Pricing Screen - /pricing</li>
        </ul>
      </section>
    </div>
  )
}
