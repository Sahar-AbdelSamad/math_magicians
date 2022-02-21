import { useEffect, useState } from 'react';
import '../assets/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [newQuote, setNewQuote] = useState(false);
  const getNewQuote = () => {
    setNewQuote(true);
  };
  useEffect(() => {
    setLoading(true);
    const mathQuote = async () => {
      const response = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await response.json();
      setQuote(`${data.quote} -${data.author}`);
      setLoading(false);
      setNewQuote(false);
    };
    mathQuote();
  }, [newQuote]);
  return (
    <>
      <h2>{(loading) ? '...Loading' : quote}</h2>
      <button type="button" onClick={getNewQuote} className="quote">Next Quote</button>
    </>
  );
};

export default Quote;
