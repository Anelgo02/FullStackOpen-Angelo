import { useState } from "react";

const App = () => {


  //save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }
  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }
  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <h1>stats</h1>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>


    </div>
  )


}

export default App