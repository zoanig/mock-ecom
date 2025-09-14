import { AnimatePresence, motion } from "motion/react";
import { FaShippingFast } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";

const ValueProposition = () => {
  const features = [
    { desc: "Free Shipping on Orders Over $50", icon: FaShippingFast },
    { desc: "Easy Returns, No Questions Asked", icon: FaQuestionCircle },
    { desc: "Exclusive Deals Every Week", icon: FaIdeal },
    { desc: "Trusted by 10,000+ Happy Customers", icon: FaSmileBeam },
  ];
  return (
    <div className="p-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl font-extrabold text-center">Value Proposition</h1>
        <AnimatePresence>
          <div className="flex flex-col gap-5">
            {features.map((feature, key) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={key}
                  className="flex gap-4 border-2 rounded-xl px-5 py-5 md:w-[60vw] w-[80vw] items-center"
                >
                  <Icon className="size-6" />
                  <span className="font-semibold text-md">{feature.desc}</span>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ValueProposition;
