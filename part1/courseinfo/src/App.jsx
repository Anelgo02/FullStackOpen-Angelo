//Exercise 1.1
//Must create three separate component that will 

const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) =>{
  return(
    <h2>{props.part} {props.exercises}</h2>
  )
}

const Total = (props) =>{
  return(

    <h3> Number of exercises: {props.total}</h3>

  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part = {part1} exercises={exercises1}/>
      <Content part = {part2} exercises={exercises2}/>
      <Content part = {part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App