import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, CloseButton } from "~/components/ui/button";
const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col justify-end">
      <main className="container relative flex h-[100dvh] flex-col items-center justify-end gap-6 px-4 pb-6 pt-16">
        <CloseButton />
        <div className="flex max-h-[500px] min-h-[200px] grow flex-col gap-4">
          <div className="flex min-h-[141.6px] grow flex-col items-center gap-4">
            <div className="relative max-h-[250px] min-h-[100px] w-full max-w-[250px] shrink basis-[250px]">
              <Image src="/404.webp" alt="not found" fill objectFit="contain" />
            </div>
            <div className="text-xl font-bold">{`ERROR 404`}</div>
            <div className="text-center font-medium">
              {`Sorry, the page you're looking for doesn't exist`}
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch gap-2 md:flex-row">
            <Button asChild variant="primary">
              <Link href="/">GO HOME</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NotFound;
