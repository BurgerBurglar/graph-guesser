import dynamic from "next/dynamic"
import Image from "next/image"
import NavLinks from "~/app/NavLinks"
import ButtonLoading from "~/app/quizes/[id]/ButtonLoading"
import { LogoBig } from "~/components/logos"
const LetsGuess = dynamic(() => import("./LetsGuess"), {
  ssr: false,
  loading: ButtonLoading,
})
export default function HomePage() {
  return (
    <main className="container flex min-h-[100dvh] flex-col items-center justify-end gap-4 p-4 pb-6">
      <NavLinks />
      <div className="flex grow flex-col items-center gap-6">
        <div className="relative max-h-[265px] min-h-[110px] w-full grow">
          <Image
            src="/front-page.webp"
            alt="logo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-auto object-contain"
            priority
          />
        </div>
        <LogoBig />
        <section className="text-center text-xl font-medium text-black">
          <p>We have the plots.</p>
          <p>You can guess what they mean.</p>
        </section>
      </div>
      <div className="flex w-full flex-col gap-2 items-center">
        <LetsGuess />
      </div>
    </main>
  )
}
