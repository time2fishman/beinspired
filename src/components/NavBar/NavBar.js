import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li>
            <Link to="/">
              <a className="nav-item" href="/">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a className="nav-item" href="/about">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <a className="nav-item" href="/search">
                Search
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
