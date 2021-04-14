import React from "react";
import Person from "./Person";

const Persons = ({ filter, persons, filteredPersons }) => {
  return (
    <ul>
      {filter.length === 0
        ? persons.map((person) => <Person key={person.id} person={person} />)
        : filteredPersons.map((person) => (
            <Person key={person.id} person={person} />
          ))}
    </ul>
  );
};

export default Persons;
