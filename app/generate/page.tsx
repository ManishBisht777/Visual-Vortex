import PromptInput from "@/components/prompt-input"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="container mt-10 flex flex-col items-center">
      <h2 className="md:text-4xl font-bold mt-8 bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
        Enter Prompt
      </h2>
      <p className="text-slate-400 mt-1 mb-4">
        10,000+ beautiful, modern minimal store designs for inspiration
      </p>
      <PromptInput />
      <div className="text-sm flex gap-2 mt-2 text-slate-400">
        <span className="font-semibold bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
          Tip
        </span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}
