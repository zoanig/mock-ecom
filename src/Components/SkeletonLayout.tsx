const SkeletonLayout = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:py-20 py-10 gap-7"
    >
      <div className="flex flex-col gap-1">
        <div>
          <div className="md:h-[40vh] md:w-[40vh] h-[30vh] w-[80vw] mx-auto md:mx-0 object-cover rounded-lg bg-cusT bg-opacity-70 animate-pulse" />
        </div>
        <div className="flex gap-1">
          <div className="md:h-[20vh] md:w-[20vh] h-[20vh] w-[40vw] rounded-lg bg-cusT bg-opacity-70 animate-pulse" />
          <div className="md:h-[20vh] md:w-[20vh] h-[20vh] w-[40vw] rounded-lg bg-cusT bg-opacity-70 animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-center">
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[40vw]  w-[80vw] animate-pulse rounded-full" />
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[20vw] w-[60vw]  animate-pulse rounded-full" />
        <div className="flex gap-3 md:flex-row flex-col md:items-center">
          <div className="bg-cusT bg-opacity-75 h-[10px] md:w-[10vw] w-[30vw] animate-pulse rounded-full" />
          <div className="bg-cusT bg-opacity-75 h-[30px] md:w-[20vw] w-[80vw] animate-pulse rounded-full" />
        </div>
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[60vw]  w-[80vw] animate-pulse rounded-full" />
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[20vw] w-[60vw]  animate-pulse rounded-full" />
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[60vw]  w-[80vw] animate-pulse rounded-full" />
        <div className="bg-cusT bg-opacity-75 h-[20px] md:w-[20vw] w-[60vw]  animate-pulse rounded-full" />
      </div>
    </div>
  );
};

export default SkeletonLayout;
