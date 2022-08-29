import "./Quotes.css";
import { useNavigate } from "react-router-dom";

const Quotes = () => {
  const navigate = useNavigate();

  async function randomQuote() {
    let response = await fetch("https://be-inspired-project.herokuapp.com/quotes");
    let data = await response.json();
    return data;
  }

  async function lengthQuotes() {
    let response = await fetch("https://be-inspired-project.herokuapp.com/quotes");
    let data = await response.json();
    return Object.entries(data).length;
  }

  let random;
  const randomresult = lengthQuotes().then((data) =>
    Math.floor(Math.random() * data)
  );
  let valuerand = Promise.resolve(randomresult);
  valuerand.then((data) => {
    let rand = data;
    random = JSON.stringify(rand);
  });

  const resultquote = randomQuote().then((data) => data[random].q);
  const resultauthor = randomQuote().then((data) => data[random].a);

  let valuequote = Promise.resolve(resultquote);
  valuequote.then((data) => {
    let quote = data;
    document.getElementById("pquote").innerHTML = JSON.stringify(quote);
  });

  let valueauthor = Promise.resolve(resultauthor);
  valueauthor.then((data) => {
    let author = data;
    document.getElementById("pauthor").innerHTML = JSON.stringify(author);
  });

  return (
    <main>
      <div className="quote">
        <h3 className="message">
          <p id="pquote"></p>
        </h3>
        <h4 className="author">
          <p id="pauthor"></p>
        </h4>
      </div>
      {/* <button className="go-back-button" onClick={() => navigate("/beinspired")}>Go Back</button> */}
      <button className="find-another-btn" onClick={() => navigate("/quotes")}>Find Another</button>
    </main>
  );
};
export default Quotes;
