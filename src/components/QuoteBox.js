 
import React from 'react';
import './styles.css';

const QuoteBox = ({ text, author, newQuote }) => {
  return (
    <div id="quote-box">
      <div id="text">{text}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={newQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${text} - ${author}`
        )}`}
        target="_blank"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;

