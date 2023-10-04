 
import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

const QuoteMachine = () => {
  const [quote, setQuote] = useState({
    text: 'Loading...',
    author: 'Unknown',
  });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author,
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-machine">
      <QuoteBox
        text={quote.text}
        author={quote.author}
        newQuote={fetchQuote}
      />
    </div>
  );
};

export default QuoteMachine;

