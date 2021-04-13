import React from "react";

const PersonForm = ({
  addPerson,
  handleNewPerson,
  handleNewNumber,
  newName,
  newNumber,
}) => {
  // console.log(newName, newNumber);
  return (
    <>
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
    </>
  );
};

export default PersonForm;
