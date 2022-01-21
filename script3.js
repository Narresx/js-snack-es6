console.log('JS OK');

/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

let students = [
    { name: 'pippo', id: 115, grades: 58 },
    { name: 'ciccio', id: 150, grades: 78 },
    { name: 'tippo', id: 110, grades: 88 },
    { name: 'trippo', id: 125, grades: 98 },
    { name: 'toppo', id: 15, grades: 68 },
];

// 1

/*
const capitalizedNames = students.map((name) => {                // prendere la stringa per charAt
    const firstLetter = name.charAt(0).toUpperCase();
    const remainingLetters = name.substring(1).toLowerCase();
    return firstLetter + remainingLetters;
});

*/

console.log(capitalizedNames);

// 2

const aboveSeventy = students.filter((student) => student.grades > 70);
console.log(aboveSeventy);

// 3

const aboveSeventyId = students.filter((student) => student.grades > 70 && student.id > 120);
console.log(aboveSeventyId);

