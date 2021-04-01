import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  console.log("click button");
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ feedback }) => {
  console.log(feedback);
  const [good, neutral, bad] = feedback;
  const allFeedback = good + neutral + bad;
  const negFeedback = bad * -1;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allFeedback}</p>
      <p>Average: {(good + neutral + negFeedback) / allFeedback}</p>
      <p>% Positive: {(good / allFeedback) * 100}%</p>
    </>
  );
};

const App = () => {
  // State
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  // Event Handlers

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleBad = () => setBad(bad + 1);

  const handleNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>

      <h1>statistics</h1>
      <Statistics feedback={[good, neutral, bad]} />
    </div>
  );
};

export default App;
