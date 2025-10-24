import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  // derived values (no extra state)
  const all = good + neutral + bad;
  const total = good - bad; // +1 good, 0 neutral, -1 bad

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  const average = total / all;           // could be negative if many "bad"
  const positive = (good / all) * 100;   // percentage

  return (
    <>
      <h2>Statistics</h2>
      <p>Good feedbacks: {good}</p>
      <p>Neutral feedbacks: {neutral}</p>
      <p>Bad feedbacks: {bad}</p>
      <p>All feedbacks: {all}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(1)}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // functional updater form (safe with batching)
  const handleGood = () => setGood(g => g + 1);
  const handleNeutral = () => setNeutral(n => n + 1);
  const handleBad = () => setBad(b => b + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
