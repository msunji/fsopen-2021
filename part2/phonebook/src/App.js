import React, { useState } from "react";

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "(123)-123-1234" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    console.log(number);
    setNewNumber(number);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewPerson} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
      <div>
        debug: {newName} {newNumber}
      </div>
    </div>
  );
};

export default App;
