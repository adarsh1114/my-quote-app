import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./quote.css";

const Quote = ({ tag }) => {
  const [quote, setQuote] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuote = async () => {
      let url = "https://api.quotable.io/random";
      if (tag) {
        url += `?tags=${tag}`;
      }
      try {
        const response = await axios.get(url);
        setQuote(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuote();
  }, [tag]);

  const handleNewQuote = async () => {
    let url = "https://api.quotable.io/random";
    if (tag) {
      url += `?tags=${tag}`;
    }
    try {
      const response = await axios.get(url);
      setQuote(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookmark = () => {
    //console.log("error")
    dispatch({ type: "ADD_BOOKMARK", payload: quote });
  };

  return (
    <div>
      {quote.content && (
        <>
          <h1>{quote.content}</h1>
          <p>- {quote.author}</p>
        </>
      )}
      <button onClick={handleNewQuote} className="button">
        New Quote
      </button>
      <button onClick={handleBookmark} className="button">Bookmark</button>
    </div>
  );
};

export default Quote;
