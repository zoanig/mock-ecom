import { motion, AnimatePresence } from "motion/react";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import { FaUser, FaAdjust } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { navigation } from "../lists";
import Menu from "./Menu";
import NavlinksDesktop from "./NavlinksDesktop";
import { Link } from "react-router-dom";

export default function Navbar() {
  const appContext = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <nav className="p-7 flex justify-center fixed w-screen z-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${appContext?.theme} backdrop-blur-lg bg-opacity-75 text-cusT flex justify-between items-center fixed w-5/6 rounded-full border-2 border-cusT px-5 py-1 mx-auto`}
        >
          <div>
            <h1 className="text-2xl font-bold">
              <Link to={"/"}>MockEcom</Link>
            </h1>
          </div>
          <NavlinksDesktop navigation={navigation} />
          <div className="hidden md:flex gap-3 items-center pl-10">
            <FaUser className="size-3 hover:cursor-pointer" title="Fake User" />
            <div className="relative">
              <FaCartShopping className="size-4 hover:cursor-pointer" title="Fake Cart" />
              <span className="text-[10px] text-center size-[15px] bg-oth rounded-full absolute -top-1 -right-2 font-bold">
                {appContext?.cart?.length ? appContext?.cart?.length : 0}
              </span>
            </div>
            <FaAdjust
              className="size-4 hover:cursor-pointer" title="Toggle Theme"
              onClick={() => {
                appContext?.toggleTheme();
              }}
            />
          </div>
          <Menu
            clickfn={() => {
              setIsOpen(!isOpen);
            }}
          />
        </motion.div>
        {isOpen && (
          <motion.div
            initial={{
              y: -10,
            }}
            animate={{
              y: "5rem",
            }}
            exit={{
              y: 0,
              opacity: 0,
            }}
            className={`${appContext?.theme} backdrop-blur-lg bg-opacity-75 text-cusT md:hidden fixed flex flex-col w-5/6 py-6 px-4 gap-5 -z-10 border-2 rounded-3xl`}
          >
            <ul className="flex gap-3 text-xl flex-col">
              {navigation.map((navig, key) => {
                return (
                  <li key={key}>
                    <Link to={navig.href}>{navig.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between">
              <FaUser className="size-5" />
              <div className="relative">
                <FaCartShopping className="size-5 hover:cursor-pointer" />
                <span className="text-[10px] text-center size-[15px] bg-oth rounded-full absolute -top-1 -right-2 font-bold">
                  {appContext?.cart?.length ? appContext?.cart?.length : 0}
                </span>
              </div>
              <FaAdjust
                className="size-5"
                onClick={() => {
                  appContext?.toggleTheme();
                }}
              />
            </div>
          </motion.div>
        )}
      </nav>
    </AnimatePresence>
  );
}
