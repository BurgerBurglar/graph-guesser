import { Info, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const NavLinks = () => {
  return (
    <nav className="flex w-full justify-end gap-4">
      <Button asChild variant="link" size="icon">
        <Link href="/about">
          <Info /> <span className="sr-only">About</span>
        </Link>
      </Button>
      <Button asChild variant="link" size="icon">
        <Link
          href="https://github.com/BurgerBurglar/graph-guesser"
          target="_blank"
        >
          <Github /> <span className="sr-only">Source</span>
        </Link>
      </Button>
    </nav>
  );
};

export default NavLinks;
