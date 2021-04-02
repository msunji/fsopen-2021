import React from "react";

// Header component
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

// Part component
const Part = ({ part }) => {
  const { name, exercises, id } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

// Content component
const Content = ({ course }) => {
  // console.log(course);
  const courseParts = course.parts;

  return (
    <div>
      <Header course={course} />
      {courseParts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};
// const Content = ({ course }) => {
//   const courseParts = course.parts;
//   return (
//     <div>
//       {courseParts.map((part) => (
//         <Part key={part.id} name={part.name} exercises={part.exercises} />
//       ))}
//     </div>
//   );
// };

// // Total component
// const Total = ({ course }) => {
//   const courseParts = course.parts;

//   return (
//     <p>
//       <b>
//         Total of{" "}
//         {courseParts.reduce(
//           (accumulator, part) => accumulator + part.exercises,
//           0
//         )}{" "}
//         exercises
//       </b>
//     </p>
//   );
// };

// Course component
const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Content course={course} />
      ))}
      {/* <Header course={course} /> */}

      {/* <Total course={course} /> */}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

export default App;
