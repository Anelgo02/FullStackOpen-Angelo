import { useState } from "react";

const App = () => {


  //save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total,setTotal] = useState(0)


  const handleAll = () =>{
    const updatedAll = all + 1
    setAll(updatedAll)
  }

  const handleTotal = (props) => {
    const updateTotal = total + props
    setTotal(updateTotal) 
  }

  const handleGood = () => {
    const updateGood = good + 1
    handleAll()
    handleTotal(1)
    setGood(updateGood)
  }
  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    handleAll()
    handleTotal(0)
    setNeutral(updateNeutral)
  }
  const handleBad = () => {
    const updateBad = bad + 1
    handleAll()
    handleTotal(-1)
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
      <p>Good feedbacks: {good}</p>
      <p>Neutral feedbacks: {neutral}</p>
      <p>Bad feedbacks: {bad}</p>
      <p>All feedbacks: {all}</p>
      <p>Average: {total/all} </p>
      <p>Positive: {(good/all) * 100}%</p>


    </div>
  )


}

export default App