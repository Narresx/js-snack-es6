console.log('js ok');

/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
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

const min = 6;
const max = 9;

const newArray = [];

const newArray = bikes.map((newItem, min, max) => {

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] >= min && newArray[i] <= max) {
            newArray.push(newItem);
        }
    }

    return newItem;
});
