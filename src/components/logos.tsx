import Link from "next/link"
import { Button } from "~/components/ui/button"

export const LogoSmall = () => (
  <Button asChild variant="ghost" className="px-12 py-0">
    <Link
      href="/"
      className="font-title text-2xl font-bold leading-6 tracking-tight sm:text-4xl mx-auto"
    >
      <h1>
        <div className="-translate-x-6 text-sky-700">GRAPH</div>
        <div className="translate-x-6 text-green-700">GUESSER</div>
      </h1>
    </Link>
  </Button>
)

export const LogoBig = () => (
  <h1 className="font-title text-5xl font-bold tracking-tight sm:text-[5rem]">
    <div className="-translate-x-6 text-sky-700">GRAPH</div>
    <div className="translate-x-6 text-green-700">GUESSER</div>
  </h1>
)
