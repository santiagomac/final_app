import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("Ye Quote");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    axios.get("https://api.kanye.rest/").then((res) => {
      setQuote(res.data.quote);
    });
  };

  return (
    <div className="quote">
      <div>
        <h1 className="title">"{quote}"</h1>
        <p className="subtitle">
          This is your Kanye West quote for today, click below to get another
          one
        </p>
        <button className="button" onClick={() => getQuote()}>
          GET NEW ONE
        </button>
      </div>
    </div>
  );
};

export default Quote;
