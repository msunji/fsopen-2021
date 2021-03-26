import React from 'react';

// Header component
const Header = (props) => {
  return <h1>{props.course}</h1>;
}

// Part component
const Part = ({courseTitle, numExercises}) => {
  // console.log(courseTitle[0], numExercises[0]);
  return <p>{courseTitle[0]} {numExercises[0]}</p>
}

// Content component
const Content = ({courses, exercises}) => {
  console.log(courses);

  const [ course1, course2, course3 ] = courses.map(course => Object.values(course));
  const [ ex1, ex2, ex3 ] = exercises.map(exercise => Object.values(exercise));

  return (
    <div>
      <Part courseTitle={course1} numExercises={ex1} />
      <Part courseTitle={course2} numExercises={ex2} />
      <Part courseTitle={course3} numExercises={ex3} />
    </div>
  )
}

// Total component


const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content 
        courses={[{part1}, {part2}, {part3}]}
        exercises={[{exercises1}, {exercises2}, {exercises3}]}
      />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App;