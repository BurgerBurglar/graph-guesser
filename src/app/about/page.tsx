import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const Results: NextPage = () => {
  return (
    <main className="container relative flex min-h-screen flex-col items-center gap-6 p-4 pb-6">
      <h1 className="font-title text-2xl font-bold leading-6 tracking-tight sm:text-4xl">
        <div className="-translate-x-6 text-sky-700">GRAPH</div>
        <div className="translate-x-6 text-green-700">GUESSER</div>
      </h1>
      <article className="article">
        <p className="text-center text-lg">
          A fun <span className="text-gray-500 line-through">for me</span> game
          to answer questions and learn more about the world.
        </p>
        <h2>Please note</h2>
        <ul>
          <li>
            There isn&apos;t a universal agreement on what defines a country.
            This game uses data from{" "}
            <Link href="https://ourworldindata.org/" target="_blank">
              Our World In Data
            </Link>
            , and I don&apos;t personally agree or disagree with their
            interpretations.
          </li>
          <li>
            There isn&apos;t a universal agreement on borders either. This game
            uses maps from{" "}
            <Link href="https://app.datawrapper.de/" target="_blank">
              Datawrapper
            </Link>
            , and I don&apos;t personally agree or disagree with their maps, and
            I do not agree or disagree with their maps personally.
          </li>
          <li>
            The game reflects the world as it is, which might include things
            some people find uncomfortable. Please use it thoughtfully.
          </li>
          <li>
            Be respectful to all countries and don&apos;t use this game to make
            fun of them.
          </li>
        </ul>
        <h2>Anti-cheat</h2>
        <p>
          There is none. Your results won&apos;t be stored on the database. You
          can go back to the previous questions after finishing a game. In fact,
          you can refresh the page after submitting your answer to do it again.
        </p>
        <h2>Contribution</h2>
        <p>
          If you find a bug, an inaccurate plot, a bad quiz, or an incorrect
          answer, please raise an issue{" "}
          <Link
            href="https://github.com/BurgerBurglar/graph-guesser"
            target="_blank"
          >
            here
          </Link>
          . If you would like to create a new quiz, create a visalization on{" "}
          <Link href="https://app.datawrapper.de/" target="_blank">
            Datawrapper
          </Link>{" "}
          first, and create a PR to update the{" "}
          <Link
            href="https://github.com/BurgerBurglar/graph-guesser/blob/main/src/data.ts"
            target="_blank"
          >
            <code>data.ts</code>
          </Link>{" "}
          file.
        </p>
        <h3>Please notice:</h3>
        <ul>
          <li>Data and visualization must reflect the world realistically.</li>
          <li>
            Quiz cannot be <em>too</em> difficult.
          </li>
        </ul>
        <h2>Donation</h2>
        <p>
          Please don&apos;t donate to me. Play the game, see who needs help the
          most, and find a charity to support them.
        </p>
      </article>
      <Button asChild className="mt-auto w-full sm:max-w-sm">
        <Link href="/">GO HOME</Link>
      </Button>
    </main>
  );
};
export default Results;
