# Part 2 Exercises

- [x] **Exercise 2.1:** \
       App component has been changed. Adjust accordingly. Component structure looks something like this: (also ensure that this works regardless of the number of parts)

```
   App
       Course
           Header
           Content
               Part
               Part
```

- [x] **Exercise 2.2:** \
       Show the sum of exercises of the coures

- [x] **Exercise 2.3:** \
       If you haven't done it this way, use the reduce method to calculate the sum of exercises

- [x] **Exercise 2.4:** \
       Extend the application to allow for an _arbitrary_ number of courses

- [x] **Exercise 2.5:** \
       Declare the Course component as a separate module which is imported by the App module. Subcomponents of Course can be in the same module.

- [x] **Exercise 2.6:** \
       Phonebook: Add a new person to the phonebook (just the name for now)

- [x] **Exercise 2.7:** \
       Phonebook: Issue a warning with the alert command when a user tries to add a name that already exists in the phonebook

- [x] **Exercise 2.8:** \
       Phonebook: Allow users to add phone numbers to the phonebook

- [x] **Exercise 2.9:** \
       Phonebook: Implement a search field to filter the list of people by name. Must be case insensitive

- [x] **Exercise 2.10:** \
       Phonebook: Refactor the application by moving suitable parts into new components (ok to extract three components). State and event handlers are to remain the App component.
- [x] **Exercise 2.11:** \
       Phonebook: Modify the application so that the initial state of the data is fetched with the axios library.
- [x] **Exercise 2.12:** \
       Countries: Create an app that pulls data from the given API. Allow users to search for a country. When the search query matches multiple countries, display their names as a list. Otherwise, if there is only one country that matches the query, then show basic data: country name, capital, population, languages spoken, country's flag
- [x] **Exercise 2.13:** \
       Countries: When multiple countries are shown allow user to toggle views for that country.
- [x] **Exercise 2.14:** \
       Countries: When showing data of a single country, show weather report for the capital of that country.
- [x] **Exercise 2.15:** \
       Phonebook: Save phonebook numbers to a backend server.
- [x] **Exercise 2.16:** \
       Phonebook: Extract code that handles communication with backend into its own module.
- [x] **Exercise 2.17:** \
       Phonebook: Allow users to delete entries from the phonebook. Confirmation from user done with the `window.confirm` method
- [x] **Exercise 2.18:** \
       Phonebook: Change one of the existing functions so if a number is added to an _existing_ user, then the new number replaces the old number. Use the PUT method for this. If the person's info is already in the phonebook, then the application confirms the action again with the `window.confirm` method.
- [ ] **Exercise 2.19:** \
       Phonebook: Improve the error message function. Show a notif that lasts for a few seconds when a successful operation is executed (person added, number has been changed)
- [ ] **Exercise 2.20:** \
       Phonebook: Show error message if you try to modify/delete an entry that no longer esists on the server. There should be some distinction between successful and unsuccesful events.
