import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li>
            <a className="nav-item" href="/">Home</a>
          </li>
          <li>
            <a className="nav-item" href="/about">About</a>
          </li>
          <li>
            <a className="nav-item" href="/search">Search</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
