import { Skeleton } from "@/components/ui/skeleton";

export default function AboutSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-[300px] w-full rounded-2xl" />
      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    </div>
  );
}