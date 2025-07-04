import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonHome = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Skeleton className="w-1/2 h-16" />
      <Skeleton className="w-1/3 h-16 mt-4" />
      <Skeleton className="w-1/2 h-8 mt-4" />
      <Skeleton className="w-1/2 h-8 mt-4" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-24 h-10" />
      </div>
    </main>
  )
}

export const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-background rounded-lg">
      <Skeleton className="w-full h-48 mb-4" />
      <div className="space-y-2">
        <Skeleton className="w-full h-6" />
      </div>
      <div className="mt-4 flex justify-between">
        <Skeleton className="w-24 h-8" />
        <Skeleton className="w-24 h-8" />
      </div>
    </div>
  )
}