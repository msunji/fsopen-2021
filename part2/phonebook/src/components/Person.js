import React from "react";
import axios from "axios";

const Person = ({ person }) => {
  const { name, number, id } = person;
  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <li>
      {name} {number} <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Person;
