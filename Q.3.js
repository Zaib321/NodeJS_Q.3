"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//In Lower Case
let personname = "muhammad zaib";
console.log("lowercase:", personname.toLowerCase());
//In Upper Case
let personname1 = "muhammad zaib";
console.log("uppercase:", personname1.toUpperCase());
//In title case
let personname2 = "muhammad zaib";
console.log("titlecase:", personname2.replace(/\b\w/g, c => c.toUpperCase()));
