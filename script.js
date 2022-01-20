console.log('JS OK');

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        nome: 'MERIDA',
        peso: 12,
    },
    {
        nome: 'TREK',
        peso: 11,
    },
    {
        nome: 'SPECIALIZED',
        peso: 10,
    },
    {
        nome: 'CANNONDALE',
        peso: 13,
    },
    {
        nome: 'KONA',
        peso: 14,
    },
    {
        nome: 'SCOTT',
        peso: 15,
    },
    {
        nome: 'SANTA CRUZ',
        peso: 9,
    },
    {
        nome: 'MARIN',
        peso: 8,
    },
    {
        nome: 'GT',
        peso: 7,
    },
    {
        nome: 'GIANT',
        peso: 6,
    },
];

console.log(bikes);

const bikesWeight = []; // array vuoto dove andrò a montare i valori del peso delle bici


for (let i = 0; i < bikes.length; i++) { // ! Controllo nell'array di oggetti
    const bike = bikes[i]; // Creo una costante per ogni proprietà degli oggetti

    let { peso } = bike; // recupero il valore del peso delle bici

    bikesWeight.push(peso); // aggiungo elementi all'array
}

console.log(bikesWeight);

const theLightest = Math.min(...bikesWeight);
console.log(theLightest); // indica il peso minore
//var m = Math.min(...myArray); funzione che indica il valore minore di un array