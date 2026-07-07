// DATE IN JAVASCRIPT
// const today = new Date();
// console.log(today);
// const bDay = new Date("2005-10-05");
// console.log(bDay);
// console.log(typeof(bDay));

// TIME IN JAVASCRIPT

// const dateNow = new Date();
// console.log(dateNow);
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth()+1);      //important point***
// console.log(dateNow.getDate());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());

// DATE MODIFICATION
// let date = new Date();
// date.setFullYear(2005);
// date.setMonth(9);
// date.setHours(10);
// date.setMinutes(30);

// console.log(date);
// DIFFERENCE BETWEEN 2 PARTICULAR DAYS
const starttime = new Date("2026-07-07");
const endtime = new Date("2026-07-14");
const difftime = endtime.getTime() - starttime.getTime();
const daysdiff = difftime / (1000*60*60*24);
console.log(daysdiff);











