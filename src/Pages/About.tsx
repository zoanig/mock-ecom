import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiFramer } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const About = () => {
  const techUsed = [
    { name: "React + React Router", Icon: FaReact },
    { name: "TailwindCSS", Icon: RiTailwindCssFill },
    { name: "Framer Motion", Icon: SiFramer },
    { name: "TanStack React Query", Icon: SiReactquery },
    { name: "Platzi Fake Store API", Icon: TbApi },
  ];
  return (
    <div className="md:w-[60vw] w-[80vw] mx-auto py-32 flex flex-col items-center gap-10">
      <div
      >
        <h1 className="text-center text-3xl font-bold">About This Store</h1>
        <p className="text-lg text-center">
          This is a practice e-commerce site made by <a>Muhammad Hassan (zoanig)</a> built to learn modern web
          development tools.
        </p>
      </div>
      <div
      >
        <h1 className="text-center text-3xl font-bold">Purpose</h1>
        <p className="text-lg text-center">
          This project was created to practice building real-world features like
          product listings, pagination, dynamic routing, API integration, and
          animations. It uses the{" "}
          <a
            href="https://fakeapi.platzi.com/"
            target="_blank"
            className="text-oth hover:underline hover:cursor-pointer"
          >
            Platzi Fake Store API{" "}
          </a>
          as the data source for products.
        </p>
      </div>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-center text-3xl font-bold">Technologies Used</h1>
        <div className="flex flex-wrap md:flex-row flex-col">
          {techUsed.map((stack) => {
            const Icon = stack.Icon;
            return (
              <motion.div
                initial={{ opacity: 0.6, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-5 flex-1 flex flex-col items-center gap-3"
              >
                <Icon className="size-9" />
                <p className="text-center text-lg">{stack.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="p-6 bg-oth rounded-lg"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-center text-3xl font-bold">Disclaimer</h1>
        <p className="text-lg text-center">
          This is <span className="font-bold">not a real store</span>. Products, prices, and images
          are all generated for practice. Please do not attempt to purchase
          anything.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
