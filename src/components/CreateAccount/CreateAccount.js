import "./CreateAccount.css";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <main>
      <h2>Create an account</h2>
      <form id="create-account-form">
        <label htmlFor="new-username">Enter a username:</label>
        <br />
        <input type="text" id="new-username" name="new-username"></input>
        <br />
        <label htmlFor="new-password">Enter a password:</label>
        <br />
        <input type="text" id="new-password" name="new-password"></input>
        <br />
        <label htmlFor="confirm-new-password">Confirm password:</label>
        <br />
        <input type="text" id="confirm-new-password" name="confirm-new-password"></input>
        <br />
      </form>
      <button type="submit" form="create-account-form">
        Submit
      </button>
      <br />
      <Link to="/main">Continue as guest</Link>
    </main>
  );
};

export default CreateAccount;
