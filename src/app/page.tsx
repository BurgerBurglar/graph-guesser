import dynamic from "next/dynamic";
import Image from "next/image";
import NavLinks from "~/app/NavLinks";
import ButtonLoading from "~/app/quizes/[id]/ButtonLoading";
const LetsGuess = dynamic(() => import("./LetsGuess"), {
  ssr: false,
  loading: ButtonLoading,
});
export default function HomePage() {
  return (
    <main className="container flex min-h-[100dvh] flex-col items-center justify-end gap-4 p-4 pb-6">
      <NavLinks />
      <div className="flex grow flex-col items-center gap-6">
        <div className="relative max-h-[265px] min-h-[141.6px] w-full grow">
          <Image
            src="/front-page.webp"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="font-title text-5xl font-bold tracking-tight sm:text-[5rem]">
          <div className="-translate-x-6 text-sky-700">GRAPH</div>
          <div className="translate-x-6 text-green-700">GUESSER</div>
        </h1>
        <section className="text-center text-xl font-medium text-black">
          <p>We have the plots.</p>
          <p>You can guess what they mean.</p>
        </section>
      </div>
      <div className="flex w-full max-w-md flex-col gap-2">
        <LetsGuess />
      </div>
    </main>
  );
}
