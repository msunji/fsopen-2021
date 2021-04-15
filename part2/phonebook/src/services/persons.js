import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// Move our HTTP requests to this module

// Show everyone currently in the phonebook
const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

// Add a new person to the phonebook
const newPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

// Delete a person from the phonebook
const deletePerson = (personId) => {
  const request = axios.delete(`${baseUrl}/${personId}`);
  return request.then((res) => res.data);
};

// Export module's functions
export default { getPersons, newPerson, deletePerson };
