import { motion, AnimatePresence } from "motion/react";


export const BgCircles = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: "17vh",
          x: "-10vh",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="md:block hidden absolute right-0 size-40 rounded-full bg-gradient-to-br from-cusT to-oth"
      ></motion.div>
      <motion.div
        initial={{
          y: "80vh",
          x: "20vh",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="md:block hidden absolute left-0 size-24 rounded-full bg-gradient-to-br from-cusT to-oth"
      ></motion.div>

      <motion.div
        initial={{
          y: "13vh",
          x: "-5vh",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="md:hidden absolute right-0 size-24 rounded-full bg-gradient-to-br from-cusT to-oth"
      ></motion.div>
      <motion.div
        initial={{
          y: "75vh",
          x: "5vh",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="md:hidden absolute left-0 size-32 rounded-full bg-gradient-to-br from-cusT to-oth"
      ></motion.div>
    </AnimatePresence>
  );
};
