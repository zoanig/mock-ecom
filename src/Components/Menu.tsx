import { motion } from "motion/react";
import { useState } from "react";

const Menu: React.FC<{ clickfn?: () => void }> = ({ clickfn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = [
    { open: { y: 6, rotate: [360, 45] }, close: { y: 0, rotate: [-360, 0] } },
    { open: { opacity: 0 }, close: { opacity: 1, x: [5, 0] } },
    { open: { y: -6, rotate: [360, -45] }, close: { y: 0, rotate: [360, 0] } },
  ];
  return (
    <div className="md:hidden">
      <button
        className="flex flex-col gap-1"
        onClick={() => {
          setIsOpen(!isOpen);
          if (clickfn) clickfn();
        }}
      >
        {hamburger.map((h, k) => {
          return (
            <motion.div
              key={k}
              animate={isOpen ? h.open : h.close}
              className="bg-cusT rounded-lg h-[2px] w-5"
            ></motion.div>
          );
        })}
      </button>
    </div>
  );
};

export default Menu;
