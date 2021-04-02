import React from "react";

// Header component
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

// // Part component
const Part = ({ name, exercises }) => {
  console.log(name, exercises);
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

//Content component
const Content = ({ course }) => {
  const courseParts = course.parts;
  return (
    <div>
      {courseParts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

// // Total component
// const Total = ({course}) => {
//   const courseParts = course.parts;

//   return (
//     <p>
//       Number of exercises: {
//         courseParts.reduce((accumulator, part) => accumulator + part.exercises, 0)
//       }
//     </p>
//   )
// }

// Course component
const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
