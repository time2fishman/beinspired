import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <h2>Sign In</h2>
      <form id="sign-in-form">
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username"></input>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="text" id="password" name="password"></input>
        <br />
        <br />
      </form>
      <button type="submit" form="sign-in-form" value="Sign In">
        Sign In
      </button>
      <br />
      <br />
      <Link to="/createaccount">Create New Account</Link>
      <br />
      <br />
      <Link to="/main">Continue As Guest</Link>
    </>
  );
};

export default SignIn;
