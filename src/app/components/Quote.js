import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const mathQuote = async () => {
      const response = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await response.json();
      setQuote(`${data.quote} -${data.author}`);
    };
    mathQuote();
  }, []);
  return (
    <>
      <h2>{quote}</h2>
    </>
  );
};

export default Quote;
