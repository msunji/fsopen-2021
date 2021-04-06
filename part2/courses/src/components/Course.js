import React from "react";

// Header component
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

// Part component
const Part = ({ part }) => {
  const { name, exercises } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

// Total component
const Total = ({ courseParts }) => {
  console.log(courseParts);
  return (
    <p>
      <b>
        Total of:{" "}
        {courseParts.reduce((accum, part) => accum + part.exercises, 0)}{" "}
        exercises
      </b>
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
      <Total courseParts={courseParts} />
    </div>
  );
};

// Course component
const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Content key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;
