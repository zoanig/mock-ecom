import AnimatedButton from "../Components/AnimatedButton";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center items-center h-screen"
      >
        <div>
          <div className="p-6 z-10">
            <h1 className="text-7xl text-center font-sans font-extrabold">
              Quality You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-oth">
                Trust
              </span>
            </h1>
            <p className="text-xl font-sans text-center opacity-75 mt-3">
              Discover what’s trending right now – handpicked just for you.
            </p>
            <div className="flex md:flex-row flex-col gap-4 justify-center mt-3">
              <AnimatedButton
                onClick={() => {}}
                transparent={false}
                value={"Start Shopping"}
              />
              <AnimatedButton
                onClick={() => {}}
                transparent={true}
                value={"Learn More"}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSection;
