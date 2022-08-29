import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  useNavigate();
  return (
    <main className="home_main">
      {/* <h2>Sign In</h2>
      <form id="sign-in-form">
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username"></input>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="text" id="password" name="password"></input>
        <br />
      </form>
      <button type="submit" form="sign-in-form">
        Sign In
      </button>
      <br />
      <Link to="/createaccount">Create an account</Link>
      <br /> */}
      <Link to="/main">
        <button className="home_inspire-me-btn">Inspire Me</button>
      </Link>
    </main>
  );
};

export default Home;
