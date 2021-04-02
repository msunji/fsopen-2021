import React from 'react';

// Header component
const Header = ({course}) => {
  return <h1>{course.name}</h1>;
}

// // Part component
const Part = ({name, exercises}) => {
  console.log(name, exercises);
  return <p>{name} {exercises}</p>
}

//Content component
const Content = ({course}) => {
  const courseParts = course.parts;
  return (
    <div>
      {courseParts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)} 
    </div>
  )
}

// Total component
const Total = ({course}) => {
  const courseParts = course.parts;

  return (
    <p>
      Number of exercises: {
        courseParts.reduce((accumulator, part) => accumulator + part.exercises, 0)
      }
    </p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        course={course}
      />
      <Total course={course} />
    </div>
  )
}

export default App;