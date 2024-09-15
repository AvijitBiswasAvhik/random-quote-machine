import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import quotes from "../src/quotes.json";

function App() {
  let [serial, setSerial] = useState(45);
  return (
    <div
      id="body-area"
      style={{ backgroundColor: quotes.famousQuotes[serial].color }}
    >
      <div id="quote-box">
        <div
          className="quote-text"
          style={{ color: quotes.famousQuotes[serial].color }}
        >
          <span className="the-sign">"</span>
          {quotes.famousQuotes[serial].quote}
        </div>
        <div
          className="quote-name"
          style={{ color: quotes.famousQuotes[serial].color }}
        >
          - {quotes.famousQuotes[serial].name}
        </div>
        <div className="next-social-wraper">
          <div>
            <a href="https://twitter.com/">
              <img
                className="social"
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="twitter"
              />
            </a>
            <a href="https://twitter.com/">
              <img
                className="social"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              />
            </a>
          </div>
          <button
            className="next-button"
            style={{
              backgroundColor: quotes.famousQuotes[serial].color,
             
            }}
            onClick={() => {
              if (serial < quotes.famousQuotes.length -1) {
                setSerial(serial + 1);
              } else {
                setSerial(0);
              }
            }}
          >
            new
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
