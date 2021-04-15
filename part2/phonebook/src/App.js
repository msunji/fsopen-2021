import React, { useState, useEffect } from "react";
import axios from "axios";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  // state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Effect hook
  useEffect(() => {
    personsService.getPersons().then((personsInfo) => {
      setPersons(personsInfo);
    });
  }, []);

  // Event handlers
  const handleNewPerson = (e) => {
    e.preventDefault();
    const name = e.target.value;
    setNewName(name);
  };

  const handleNewNumber = (e) => {
    e.preventDefault();
    const number = e.target.value;
    setNewNumber(number);
  };

  const handleDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      // console.log("delete", personToDelete.id);
      personsService.deletePerson(personToDelete.id).then(() => {
        const peopleList = persons.filter(
          (person) => personToDelete.id !== person.id
        );
        setPersons(peopleList);
      });
    }
  };

  const handleFilter = (e) => {
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
    // Recall that  the addPerson function in the persons module takes newPerson as a param
    personsService.newPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName(""); // reset input value
      setNewNumber(""); // likewise
    });

    // const duplicateError = `${newName} has already been added to phonebook`;
    // // on adding a new name, go through array of objects to check for duplicate property values. if true (aka there IS a duplicate), then trigger an alert, otherwise, add new person to list of people and display the list
    // const personBool = persons.some((person) => person.name === newName);
    // personBool ? alert(duplicateError) : setPersons(persons.concat(newPerson));
    // setNewName("");
    // setNewNumber("");
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
