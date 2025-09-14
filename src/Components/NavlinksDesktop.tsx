import { Link } from "react-router-dom";
import type { NavProps } from "../Types";


const NavlinksDesktop: React.FC<NavProps> = ({navigation}) => {
  return (
    <ul className="hidden md:flex gap-3 items-center text-lg">
      {navigation.map((navig, key) => {
        return <li key={key}><Link to={navig.href}>{navig.name}</Link></li>;
      })}
    </ul>
  );
}

export default NavlinksDesktop;
