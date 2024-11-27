import { Skeleton } from "~/components/ui/skeleton";

const HeaderLoading = () => {
  return (
    <div className="flex h-12 items-center pl-12 pr-14">
      <Skeleton className="h-4 w-full" />
    </div>
  );
};

export default HeaderLoading;
