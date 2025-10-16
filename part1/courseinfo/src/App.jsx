//Exercise 1.1
//Must create three separate component that will 

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  //Part = {props.part} {props.exercises}
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <h2>
      {props.parts.name} {props.parts.exercises}
    </h2>
  )
}

const Total = (props) => {
  return (

    <h3> Number of exercises: {props.total}</h3>

  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App