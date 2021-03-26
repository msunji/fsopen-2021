import React from 'react';

// Header component
const Header = (props) => {
  return <h1>{props.course}</h1>;
}

// Part component
// const Part = ({name, exercises}) => {
//   console.log(name, exercises);
//   return <p>{name} {exercises}</p>
// }

//Content component
const Content = ({parts}) => {
  console.log(parts);

  return (
    <div>
      <p>test</p>
      {/* {
        parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)
      } */}
    </div>
  )
}

// Total component
const Total = ({parts}) => {
  console.log(parts);

  return (
    <p>
      Number of exercises {
        parts.reduce((accumulator, part) => accumulator +  part.exercises, 0)
      }
    </p>
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
      <Content 
        parts={parts}
      />
      <Total parts={parts} />
    </div>
  )
}

export default App;