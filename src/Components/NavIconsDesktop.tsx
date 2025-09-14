import { FaUser, FaAdjust } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const NavIconsDesktop = () => {
  return (
    <div className="hidden md:flex gap-3 items-center pl-10">
      <FaUser className="size-3 hover:cursor-pointer" />
      <FaCartShopping className="size-4 hover:cursor-pointer" />
      <FaAdjust
        className="size-4 hover:cursor-pointer"
      />
    </div>
  );
};

export default NavIconsDesktop;
