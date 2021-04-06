import React, { useState } from "react";

const Person = ({ name }) => {
  return <li>{name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // Event handlers
  const handleNewPerson = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const name = e.target.value;
    setNewName(name);
  };

  // Add name to array of objects
  const addName = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
    };

    const duplicateError = `${newName} has already been added to phonebook`;
    // on adding a new name, go through array of objects to check for duplicate property values. if true (aka there IS a duplicate), then trigger an alert, otherwise, add new person to list of people and display the list
    const personBool = persons.some((person) => person.name === newName);
    personBool ? alert(duplicateError) : setPersons(persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNewPerson} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
