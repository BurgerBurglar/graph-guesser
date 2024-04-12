import type { NextPage } from "next";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../../components/ui/button";

const Page: NextPage = () => {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-end gap-12 px-4 py-6">
      <Image
        src="/you-did-great.webp"
        alt="you did great!"
        width={250}
        height={250}
      />
      <div className="text-lg">You learned so much about the world today!</div>
      <div className="flex w-full flex-col items-stretch gap-2 pt-12">
        <SecondaryButton>Share</SecondaryButton>
        <SecondaryButton>See Results</SecondaryButton>
        <PrimaryButton>Play Again</PrimaryButton>
      </div>
    </main>
  );
};
export default Page;
