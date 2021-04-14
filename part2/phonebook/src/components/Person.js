import React from "react";

const Person = ({ person, handleDelete }) => {
  const { name, number, id } = person;

  return (
    <li>
      {name} {number} <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
};

export default Person;
