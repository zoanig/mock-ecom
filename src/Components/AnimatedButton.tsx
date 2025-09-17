import { motion, AnimatePresence } from "motion/react";
import type { AnimatedButtonProps } from "../Types";

const AnimatedButton: React.FC<AnimatedButtonProps> = ({transparent, value, onClick}) => {

  return (
    <AnimatePresence>
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.8 }}
        className={`font-semibold text-lg ${transparent ? "bg-transparent border-2 border-oth" : "bg-oth"} py-2 px-6 rounded-full`}
      >
        {value}
      </motion.button>
    </AnimatePresence>
  );
};

export default AnimatedButton;
