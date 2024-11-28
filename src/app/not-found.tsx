import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button, CloseButton } from "~/components/ui/button"

const NotFound: NextPage = () => {
  return (
    <main className="container flex h-[100dvh] min-h-[511px] flex-col items-stretch justify-between gap-6 px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex min-h-[141.6px] grow flex-col items-center gap-5">
        <div className="relative max-h-[250px] min-h-0 w-full max-w-[350px] basis-[350px]">
          <Image
            src="/404.webp"
            alt="not found"
            fill
            className="w-auto object-contain"
            priority
          />
        </div>
        <div className="text-4xl font-bold text-green-700">{`ERROR 404`}</div>
        <div className="text-center font-medium">
          {`Sorry, the page you're looking for doesn't exist.`}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col gap-2">
        <Button asChild variant="primary" className="">
          <Link href="/">GO HOME</Link>
        </Button>
      </div>
    </main>
  )
}
export default NotFound
