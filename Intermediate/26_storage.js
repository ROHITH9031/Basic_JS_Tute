// LOCAL STORAGE IN JAVASCRRIPT.

// To set the data
localStorage.setItem('name', 'Atyam Rohith');
localStorage.setItem('age',20);
console.log('Local Storage: ',localStorage);
// To Get the Data
const user = localStorage.getItem('name');
const age = localStorage.getItem('age')
console.log('User: ',user);
console.log('Age: ',age);
// To remove the data.
localStorage.removeItem('name');
localStorage.clear();

// SESSION STORAGE AND LOCAL STORAGE ARE LOOKS LIKE SAME BUT ONLY THE DIFFERENCE IS SESSION STORAGE HAVE LIMIT TO ACCESS THE DATA UPTO THAT SESSION.

// COOKIES IN JAVASCRIPT. =>SMALL DATA FILES, THAT STORED INSIDE THE BROWSER. 
// WE CAN STORE THE COOKIES ON CLIENT SIDE AS WELL AS SERVER SIDE.

document.cookie = "name=atyamrohith; expires=Wed 15-07-2026;path=/";
console.log('Cookies: ',document.cookie);

