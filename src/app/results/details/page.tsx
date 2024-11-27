import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import QuizOverviewListLoading from "~/app/results/details/QuizOverviewListLoading";
import { Button } from "~/components/ui/button";
const QuizOverviewList = dynamic(
  () => import("~/app/results/details/QuizOverviewList"),
  {
    ssr: false,
    loading: QuizOverviewListLoading,
  },
);

const ResultsDetails: NextPage = () => {
  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-4 px-4 py-6">
      <QuizOverviewList />
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center gap-2 sm:flex-row">
        <Button variant="outline" asChild className="grow">
          <Link href="/results">BACK</Link>
        </Button>
        <Button asChild className="grow">
          <Link href="/">CONTINUE</Link>
        </Button>
      </div>
    </main>
  );
};
export default ResultsDetails;
