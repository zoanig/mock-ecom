import { motion } from "motion/react";

interface SkeletonLoaderProps {
  count?: number;
  className?: string;
}

export default function SkeletonLoader({
  count = 1,
}: SkeletonLoaderProps) {
  const items = Array.from({ length: count });

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {items?.map((_) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-[250px] h-[350px] border-2 border-cusT rounded-2xl flex flex-col p-4 gap-2 items-center"
        >
          {/* Image + Category Tag */}
          <div className="relative flex justify-center mb-3">
            <div className="h-[180px] w-[180px] object-cover rounded-lg bg-cusT bg-opacity-70 animate-pulse" />
            <div className="absolute bottom-2 right-2 bg-oth text-cusT font-bold py-1 px-3 rounded-full text-xs shadow-sm"></div>
          </div>

          {/* Title */}
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[100%] animate-pulse rounded-lg" />
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[100%] animate-pulse rounded-lg" />
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[100%] animate-pulse rounded-lg" />
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[100%] animate-pulse rounded-lg"/>
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[60%] self-start animate-pulse rounded-lg" />
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[4px] w-[60%] self-start animate-pulse rounded-lg" />


          {/* Button (pushed to bottom) */}
          <div className="flex-1 bg-cusT bg-opacity-70 max-h-[40px] w-[60%] animate-pulse rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}
