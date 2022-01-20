console.log('JS OK');

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    MERIDA = {
        nome: 'MERIDA',
        peso: 12,
    },
    TREK = {
        nome: 'TREK',
        peso: 11,
    },
    SPECIALIZED = {
        nome: 'SPECIALIZED',
        peso: 10,
    },
    CANNONDALE = {
        nome: 'CANNONDALE',
        peso: 13,
    },
    KONA = {
        nome: 'KONA',
        peso: 14,
    },
    SCOTT = {
        nome: 'SCOTT',
        peso: 15,
    },
    SANTA = {
        nome: 'SANTA CRUZ',
        peso: 9,
    },
    MARIN = {
        nome: 'MARIN',
        peso: 8,
    },
    GT = {
        nome: 'GT',
        peso: 7,
    },
    GIANT = {
        nome: 'GIANT',
        peso: 6,
    },
];

console.log(bikes);

const bikesWeight = []; // array vuoto dove andrò a montare i valori del peso delle bici

for (let i = 0; i < bikes.length; i++) { // ! Controllo nell'array di oggetti
    const bike = bikes[i]; // Creo una costante per ogni proprietà degli oggetti

    let { peso } = bike; // recupero il valore del peso delle bici

    console.log(bike);

    console.log(peso);

    bikesWeight.push(peso);

    console.log(bikesWeight);
}

//var m = Math.min(...myArray); funzione che indica il valore minore di un array

const theLightest = Math.min(...bikesWeight);

console.log(theLightest); // indica il peso minore