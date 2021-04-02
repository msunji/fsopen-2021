import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  console.log("click button");
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ feedback }) => {
  console.log(feedback.length);
  const [good, neutral, bad] = feedback;
  const allFeedback = good + neutral + bad;
  const neutralFeedback = neutral * 0;
  const negFeedback = bad * -1;
  const aveFeedback = (good + neutralFeedback + negFeedback) / allFeedback;
  const posPercentFeedback = (good / allFeedback) * 100;

  // only render this component if someone actually leaves feedback
  const noFeedback = feedback.every((value) => value === 0);

  if (noFeedback) {
    return (
      <div>
        <p>No one's left any feedback yet</p>
      </div>
    );
  }
  return (
    <>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={allFeedback} />
          <Statistic text="Average" value={aveFeedback} />
          <Statistic text="% Positive" value={posPercentFeedback} />
        </tbody>
      </table>
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
