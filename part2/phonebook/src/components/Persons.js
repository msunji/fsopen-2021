import React from "react";
import Person from "./Person";

const Persons = ({ filter, persons, filteredPersons, handleDelete }) => {
  return (
    <ul>
      {filter.length === 0
        ? persons.map((person) => (
            <Person
              key={person.id}
              person={person}
              handleDelete={handleDelete}
            />
          ))
        : filteredPersons.map((person) => (
            <Person
              key={person.id}
              person={person}
              handleDelete={handleDelete}
            />
          ))}
    </ul>
  );
};

export default Persons;
