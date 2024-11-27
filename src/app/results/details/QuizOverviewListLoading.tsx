import { Skeleton } from "~/components/ui/skeleton";

const QuizOverviewListLoading = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="h-[316.8px] w-full rounded-xl" />
      <Skeleton className="h-[316.8px] w-full rounded-xl" />
      <Skeleton className="h-[316.8px] w-full rounded-xl" />
      <Skeleton className="h-[316.8px] w-full rounded-xl" />
      <Skeleton className="h-[316.8px] w-full rounded-xl" />
    </div>
  );
};

export default QuizOverviewListLoading;
