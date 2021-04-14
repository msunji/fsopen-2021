import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// Move our HTTP requests to this module
// Show everyone currently in the phonebook

const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

// Export module's functions
export default { getPersons };
