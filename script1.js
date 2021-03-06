console.log('JS OK');

/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballTeams = [    // array di squadre
    {
        name: 'Internazionale',
        points: 0,
        irregularitiesSuffered: 0,
    },
    {
        name: 'Juventus',
        points: 0,
        irregularitiesSuffered: 0,
    },
    {
        name: 'Milan',
        points: 0,
        irregularitiesSuffered: 0,
    },
    {
        name: 'Roma',
        points: 0,
        irregularitiesSuffered: 0,
    },
];

console.log(footballTeams);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const clonedTeams = [];  // array vuoto dove andrò a pushare i nuovi oggetti (oggetto con nome e falli subiti);



for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];

    team.points = randomNumber(1, 15);
    team.irregularitiesSuffered = randomNumber(1, 15);


    const { name, irregularitiesSuffered } = team; // Recupero i valori che mi servono 

    clonedTeams.push({ name, irregularitiesSuffered });

}

console.log(clonedTeams);