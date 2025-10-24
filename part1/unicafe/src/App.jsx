import { useState } from "react";

const App = () => {


  //save clicks of each button to its own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //functional updater form => best solution 
  const handleGood = () => setGood(g => g + 1);
  const handleNeutral = () => setNeutral(n => n + 1);
  const handleBad = () => setBad(b => b + 1);

  //calculated values, better to avoid storing unnecessary 
  const all = good + bad + neutral;
  const  total = good - bad; //good=1, bad=-1

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <h1>stats</h1>
      <p>Good feedbacks: {good}</p>
      <p>Neutral feedbacks: {neutral}</p>
      <p>Bad feedbacks: {bad}</p>
      <p>All feedbacks: {all}</p>
      <p>Average: {total / all} </p>
      <p>Positive: {(good / all) * 100}%</p>


    </div>
  )


}

export default App