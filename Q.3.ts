// Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//In Lower Case
let personname: string= "muhammad zaib";

console.log ("lowercase:" ,personname.toLowerCase());

//In Upper Case
let personname1: string = "muhammad zaib";

console.log("uppercase:", personname1.toUpperCase());

//In title case
let personname2: string= "muhammad zaib";

console.log("titlecase:",personname2.replace(/\b\w/g,c=> c.toUpperCase()));