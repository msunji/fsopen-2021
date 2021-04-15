import React, { useState, useEffect } from "react";
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

    const personExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (personExists) {
      const personToChange = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );
      const changedPerson = { ...personToChange, number: newNumber };

      if (
        window.confirm(
          `${newName} already exists. Did you want to update their number?`
        )
      ) {
        personsService
          .changeNumber(personToChange.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === personToChange.id ? returnedPerson : person
              )
            );
          });
        return;
      }
      return;
    }
    personsService.newPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
    });

    setNewName(""); // reset input value
    setNewNumber(""); // likewise

    // const duplicateError = `${newName} has already been added to phonebook. Would you like to replace the old number with a new one?`;
    // // on adding a new name, go through array of objects to check for duplicate property values. if true (aka there IS a duplicate), then trigger an alert, otherwise, add new person to list of people and display the list
    // const confirmChange = window.confirm(duplicateError);

    // if (personExists) {
    //   // if there is a duplicate, then find the entry in the phonebook (name should be the same as newName)
    //   const personToChange = persons.find(
    //     (person) => person.name.toLowerCase() === newName.toLowerCase()
    //   );
    //   // modify said person's details
    //   const changedDetails = { ...personToChange, number: newNumber }; // use obj spread syntax to make a copy of the old details

    //   if (confirmChange) {
    //     // PUT request should take the modified persons object
    //     personsService
    //       .changeNumber(personToChange.id, changedDetails)
    //       .then((returnedPerson) => {
    //         setPersons(
    //           persons.map((person) =>
    //             person.id !== personToChange.id ? person : returnedPerson
    //           )
    //         );
    //       });
    //     setNewName("");
    //     setNewNumber("");
    //     return;
    //   }
    // }
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
