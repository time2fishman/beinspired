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
      <p className="app-description">
        Isn't it uplifting to hear a thoughtful quote? Well, now you can use
        this auto generator to view inspirational quotes at random! Select the
        button below to get started.
      </p>
      <Link to="/beinspired">
        <button className="home_inspire-me-btn">Inspire Me</button>
      </Link>
    </main>
  );
};

export default Home;
