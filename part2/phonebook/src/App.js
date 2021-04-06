import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Event handlers
  const handleNewPerson = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const name = e.target.value;
    setNewName(name);
  };

  const handleNewNumber = (e) => {
    e.preventDefault();
    const number = e.target.value;
    setNewNumber(number);
  };

  const handleFilter = (e) => {
    // console.log(e.target, e.target.value);
    const nameToFilter = e.target.value.toLowerCase();
    setFilter(nameToFilter);
  };

  // Add name to array of objects
  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const duplicateError = `${newName} has already been added to phonebook`;
    // on adding a new name, go through array of objects to check for duplicate property values. if true (aka there IS a duplicate), then trigger an alert, otherwise, add new person to list of people and display the list
    const personBool = persons.some((person) => person.name === newName);
    personBool ? alert(duplicateError) : setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  // RegEx for matching and new filtered list of people that match the conditions
  const regex = new RegExp("^" + filter);
  const filteredPersons = persons.filter((person) =>
    regex.test(person.name.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter numbers by name: <Filter handleFilter={handleFilter} />
      </p>
      <h2>Add a New Person</h2>
      <PersonForm
        addPerson={addPerson}
        handleNewPerson={handleNewPerson}
        handleNewNumber={handleNewNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        filteredPersons={filteredPersons}
      />
    </div>
  );
};

export default App;
