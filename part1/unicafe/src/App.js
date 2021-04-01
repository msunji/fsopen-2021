import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  console.log('click button');
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // State
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  // Event Handlers

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleBad = () => (
    setBad(bad + 1)
  );

  const handleNeutral = () => (
    setNeutral(neutral + 1)
  );

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>

      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}

export default App;
