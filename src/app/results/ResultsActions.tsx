"use client";

import Link from "next/link";
import { RWebShare } from "react-web-share";
import ResponsiveDrawer from "~/components/ResponsiveDrawer";
import { Button } from "~/components/ui/button";
import { usePlay } from "~/hooks";

const ResultsActions = () => {
  const { playRandomGame } = usePlay();
  return (
    <ResponsiveDrawer maxHeight="800px" trigger={<Button>NEXT</Button>}>
      <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2">
        <RWebShare
          data={{
            title: "Graph Guesser",
            text: "Guess what the plots mean!",
            url:
              process.env.SHARE_URL ?? "https://graph-guesser-8964.vercel.app/",
          }}
        >
          <Button variant="outline">SHARE</Button>
        </RWebShare>
        <Button variant="outline" asChild>
          <Link href="/results/details">SEE RESULTS</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">CHANGE DIFFICULTY</Link>
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            playRandomGame({
              canPlayOld: false,
            })
          }
        >
          PLAY AGAIN
        </Button>
      </div>
    </ResponsiveDrawer>
  );
};

export default ResultsActions;
