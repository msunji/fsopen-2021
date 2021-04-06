import React from "react";
import Person from "./Person";

const Persons = ({ filter, persons, filteredPersons }) => {
  return (
    <ul>
      {filter.length === 0
        ? persons.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))
        : filteredPersons.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))}
    </ul>
  );
};

export default Persons;
