import { motion, AnimatePresence } from "motion/react";
import type { AnimatedButtonProps } from "../Types";

const AnimatedButton: React.FC<AnimatedButtonProps> = ({transparent, value, onClick, disabled}) => {

  return (
    <AnimatePresence>
      <motion.button
        disabled = {disabled}
        onClick={onClick}
        whileTap={{ scale: 0.8 }}
        whileHover={{
          y: -2
        }}
        transition={{duration: 0.15}}
        className={`disabled:opacity-75 font-semibold text-lg ${transparent ? "bg-transparent border-2 border-oth" : "bg-oth"} py-2 px-6 rounded-full`}
      >
        {value}
      </motion.button>
    </AnimatePresence>
  );
};

export default AnimatedButton;
