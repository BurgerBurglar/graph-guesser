import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import ButtonLoading from "~/app/quizes/[id]/ButtonLoading";
import ResultDisplayList from "~/app/results/ResultDisplayList";
import { CloseButton } from "~/components/ui/button";
const ResultsActions = dynamic(() => import("./ResultsActions"), {
  ssr: false,
  loading: ButtonLoading,
});

const Results: NextPage = () => {
  return (
    <main className="container relative flex h-[100dvh] min-h-[511px] flex-col items-stretch justify-between gap-6 px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex min-h-[141.6px] grow flex-col items-stretch gap-5">
        <div className="relative max-h-[250px] min-h-[100px] w-full basis-[350px]">
          <Image
            src="/you-did-great.webp"
            alt="you did great!"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center text-4xl font-bold text-green-700">
          YOU DID GREAT
        </div>
        <div className="text-center text-lg font-medium">
          <p>You learned so much about the world today!</p>
          <p>Wanna learn more?</p>
        </div>
        <ResultDisplayList />
      </div>
      <ResultsActions />
    </main>
  );
};
export default Results;
