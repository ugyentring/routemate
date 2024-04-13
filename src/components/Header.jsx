import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/golo.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="routemate logo" />
        <span>URoute</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
