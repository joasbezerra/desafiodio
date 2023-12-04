/* Fiz em duas versões diferentes.

Uma versão com um objeto com vários heróis com diferentes quantidades de vitórias e derrotas.
Outra versão com duas variáveis diferentes para guardar o número de vitórias e derrotas. */

// Primeira Versão

const players = {
    heros: [
        {nickname:"John", wins: 10, losses: 9},
        {nickname:"Paul", wins: 100, losses: 10},
        {nickname:"Naruto", wins: 60, losses: 30},
        {nickname:"Peter", wins: 88, losses: 10},
        {nickname:"Boruto", wins: 200, losses: 65},
        {nickname:"Ichigo", wins: 98, losses: 10}
]
};

function getRank() {
for (i = 0; i < players.heros.length; i++) {
points = players.heros[i].wins - players.heros[i].losses;
if (points <= 10) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Ferro.`)
} else if (points >= 11 && points <= 20) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Bronze.`)        
} else if (points >= 21 && points <= 50) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Prata.`)
} else if (points >= 51 && points <= 80) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Ouro.`)
} else if (points >= 81 && points <= 90) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Diamante.`)
} else if (points >= 91 && points <= 100) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Lendário.`)
} else if (points >= 101) {
    console.log(`O herói de nome ${players.heros[i].nickname} tem saldo de ${points} pontos e está no nível Imortal.`)
} else {
    console.log("Seu herói não tem rank.");
} 
};

}

getRank();


/* 

Segunda Versão

*/

let wins;
let losses;

wins = 12; // mude o número de vitórias aqui.
losses = 3; // mude o número de derrotas aqui.

getRanked(wins, losses); // Pode colocar o número de vitórias e derrotas aqui também.


function getRanked(wins, losses) {
let points = wins - losses;
getPoints(points);
return points;
}

function getPoints(points) {
    if (points <= 10) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Ferro.`)
    } else if (points >= 11 && points <= 20) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Bronze.`)        
    } else if (points >= 21 && points <= 50) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Prata.`)
    } else if (points >= 51 && points <= 80) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Ouro.`)
    } else if (points >= 81 && points <= 90) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Diamante.`)
    } else if (points >= 91 && points <= 100) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Lendário.`)
    } else if (points >= 101) {
        console.log(`O herói tem saldo de ${points} pontos e está no nível Imortal.`)
    } else {
        console.log("Seu herói não tem rank.");
    } 

}