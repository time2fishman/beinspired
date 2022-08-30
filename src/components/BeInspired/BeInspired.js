import "./BeInspired.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuote } from "../../actions/quotes";

const BeInspired = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quoteData, setQuoteData] = useState({
    q: "",
    a: "",
    c: "",
    h: "",
  });

  // console.log(`Current quoteData: ${quoteData.q}`);
  // console.log(`Current authorData: ${quoteData.a}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuote(quoteData));
    setQuoteData({ q: "", a: "", c: "", h: "" });
    alert("Your new quote has been submitted. Thank you!");
  };

  const clear = () => {
    setQuoteData({ q: "", a: "", c: "", h: "" });
  };

  return (
    <main>
      <h2 className="be-inspired-heading">I'm ready for inspiration!</h2>
      <button onClick={() => navigate("/quotes")} className="rdm-quote-btn">
        Generate Random Quote
      </button>
      <h3 className="contribute-heading">Wanna Contribute?</h3>
      <p className="add-text">Share your own inspirational quote below.</p>
      <form className="new-quote-form" onSubmit={handleSubmit}>
        <label className="add-quote-label" htmlFor="add-quote">
          Quote
        </label>
        <br />
        <textarea
          className="new-quote-text-area"
          onChange={(e) => {
            setQuoteData({ ...quoteData, q: e.target.value });
          }}
          id="add-quote"
          name="add-quote"
          value={quoteData.q}
          cols="35"
          rows="2"
          maxLength="350"
          placeholder="Enter new quote here..."
          required
        />
        <br />
        <label htmlFor="add-author">Author</label>
        <br />
        <input
          className="new-author-text"
          onChange={(e) => {
            setQuoteData({ ...quoteData, a: e.target.value });
          }}
          type="text"
          id="add-author"
          name="add-author"
          value={quoteData.a}
          placeholder="Enter author here..."
          required
        />
        <br />
        <div className="form-btns">
          <input
            className="new-quote-clear-btn"
            type="button"
            onClick={clear}
            value="Clear"
          />
          <input
            className="new-quote-submit-btn"
            type="submit"
            onSubmit={handleSubmit}
            value="Submit"
          />
        </div>
      </form>
    </main>
  );
};

export default BeInspired;
