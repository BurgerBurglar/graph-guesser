import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, CloseButton } from "~/components/ui/button";
const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col justify-end">
      <main className="container relative flex h-[100dvh] flex-col items-center justify-between px-4 pb-6 pt-16">
        <CloseButton />
        <div className="flex flex-col items-center gap-4">
          <Image src="/404.webp" alt="not found" width={250} height={250} />
          <div className="text-4xl font-bold text-green-700">{`ERROR 404`}</div>
          <div className="text-center font-medium">
            {`Sorry, the page you're looking for doesn't exist`}
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-2 md:flex-row">
          <Button asChild variant="primary">
            <Link href="/">GO HOME</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};
export default NotFound;
