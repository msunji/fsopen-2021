import React from 'react';

// Header component
const Header = (props) => {
  return <h1>{props.course}</h1>;
}

// Part component
const Part = ({name, exercises}) => {
  console.log(name, exercises);
  return <p>{name} {exercises}</p>
}

//Content component
const Content = ({parts}) => {
  console.log(parts);

  return (
    <div>
      {
        parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)
      }
    </div>
  )
}

// Total component
const Total = ({parts}) => {
  const [ part1, part2, part3 ] = parts;

  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[part1, part2, part3]}
      />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App;