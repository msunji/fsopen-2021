import React from "react";

const Person = ({ person }) => {
  const { name, number, id } = person;
  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log("delete", id);
    }
  };

  return (
    <li>
      {name} {number} <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Person;
