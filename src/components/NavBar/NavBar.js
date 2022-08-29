import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li>
            <Link className="nav-item" to="/" style={{ textDecoration: 'none' }}>
                Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about" style={{ textDecoration: 'none' }}>
                About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/search" style={{ textDecoration: 'none' }}>
                Search
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
