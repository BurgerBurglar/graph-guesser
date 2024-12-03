import { Info, Github, HeartHandshake } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"

const NavLinks = () => {
  return (
    <nav className="flex w-full justify-end gap-4">
      <Button
        asChild
        variant="link"
        className="font-medium p-2 text-gray-600 hover:text-current flex gap-2"
      >
        <Link href="/about">
          <Info /> <span className="sr-only sm:not-sr-only">About</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="link"
        className="font-medium p-2 text-gray-600 hover:text-current flex gap-2"
      >
        <Link
          href="https://github.com/BurgerBurglar/graph-guesser"
          target="_blank"
        >
          <Github /> <span className="sr-only sm:not-sr-only">Source</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="link"
        className="font-medium p-2 text-gray-600 hover:text-current flex gap-2"
      >
        <Link href="/donation">
          <HeartHandshake />
          <span className="sr-only sm:not-sr-only">Donate</span>
        </Link>
      </Button>
    </nav>
  )
}

export default NavLinks
