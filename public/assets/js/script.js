// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fonction Lancer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //
let dices = document.querySelectorAll(".diceButton"); // Récupération des élements Dés
let rollDicesButton = document.getElementById("throwDice"); // Récupération du bouton "Lancer les dés"
let messageOf2throwsLeft= document.querySelectorAll("p")[0];
let messageOf1throwLeft= document.querySelectorAll("p")[1];
let messageOfNothrowLeft= document.querySelectorAll("p")[2];

// Fonction Lancer de dés - Jing
const numberOfTheTrials = 3;
// compteur pour le nombre des dés à bloquer
let countBlockedDices = 0;
// compteur pour le nombre des dés à débloquer
let countUnBlockedDices = 0;
// compteur pour le nombre des lancers
let countNbOfThrow = 0;
// tableau pour les dés à garder
let keepDices = [];
// tableau pour les index des dés à garder
let keepDicesPositions = [];

function rollDices(numberOfTheTotalDices) {
    let dicesValues = [];
    for (let i = 0; i < numberOfTheTotalDices; i++) {
    dicesValues[i] = Math.floor(Math.random() * 6 + 1);
    }
  // compter le nombre des fois pour les lancers des dés
    countNbOfThrow++;

  // si 3 fois, 
if (countNbOfThrow === numberOfTheTrials) {
    // désactiver la bouton 
    rollDicesButton.disabled;
    // mettre la bouton en couleur "rouge" 
    rollDicesButton.classList.add("text-danger");
}

return dicesValues;
}

// Affecter visuellement aux dés les résultats du lancer
let btnRollDices = () => {

  // bloquer la fonction "rollDices" quand on a lancé 3 fois
if (countNbOfThrow === numberOfTheTrials) {
    return;
}

  // afficher le message pour indiquer qu'il reste encore 2 lancers
if(countNbOfThrow ===0 ) {
    messageOf2throwsLeft.classList.remove("d-none")
}

  // afficher le message pour indiquer qu'il reste encore 1 lancers
if(countNbOfThrow ===1 ) {
    messageOf2throwsLeft.classList.add("d-none")
    messageOf1throwLeft.classList.remove("d-none")
}

 // afficher le message pour indiquer qu'il ne reste plus de lancer
if(countNbOfThrow ===2 ) {
    messageOf1throwLeft.classList.add("d-none")
    messageOfNothrowLeft.classList.remove("d-none")
}

  // lancer le nombre des dès selon le nombre des dès à bloquer / débloquer
let dicesValues = rollDices(5 - countBlockedDices + countUnBlockedDices);
console.log(`Les valeurs des dés sont : ${dicesValues}`);

  // affecter aux dés les valeurs :
for (index = 0; index < 5; index++) {
    // si les dés ne sont pas bloqués : 
    if (!keepDicesPositions.includes(index)) {
      // prendre la 1ère valeur du tableau "diceValues"
    dices[index].innerHTML = dicesValues.shift();
    }
    // si les dés sont bloqués, laisser leurs valeurs telles qu'elles sont
}
};

// Event Listener
rollDicesButton.addEventListener("click", btnRollDices);

// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fin fonction Lancer les dés // // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fonction Bloquer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //

// fonction pour recevoir les cliques
function receiveDiceClick(clickEvent) {
let clickedDice = clickEvent.target;

  // s'il y a "text-success", on débloque le dè
if (clickedDice.classList.contains("text-success")) {
    unblockDices(clickEvent);
} else {
    // sinon, on bloque le dè
    blockDices(clickEvent);
}
}

// fonction pour bloquer le dè
function blockDices(clickEvent) {

  // cibler la valeur du dè bloqué
let diceClickedValue = parseInt(clickEvent.target.innerText);

  // cibler l'id du dè bloqué
let diceClickedId = clickEvent.target.id;

  // cibler la position du dè bloqué
let diceClickedPosition = parseInt(diceClickedId.slice(5, 6));

  // ajouter une couleur verte pour le dè bloqué
clickEvent.target.classList.add("text-success");

  // conserver la valeur du dè bloqué dans le tableau "keepDices"
console.log(`Les valeurs des dés cliqués sont : ${diceClickedValue}`);
keepDices.push(diceClickedValue);

  // conserver la position du dè bloqué dans le tableau "keepDicesPositions"
keepDicesPositions.push(diceClickedPosition);

console.log(`L'index du dé cliqué est ${keepDicesPositions}`);
console.log( `Dans le tableau "keepDices":${keepDices}`);
  // compter le nombre des dès bloqués
countBlockedDices++;
}

// fonction pour débloquer le dè
function unblockDices(clickEvent) {

  // cibler la valeur du dè débloqué
let diceUnclicked = parseInt(clickEvent.target.innerText);

  // cibler l'id du dè débloqué
let diceUnclickedId = clickEvent.target.id;

  // cibler la position du dè débloqué
let diceUnclickedPosition = parseInt(diceUnclickedId.slice(5, 6));

  // supprimer la couleur verte pour le dè débloqué
clickEvent.target.classList.remove("text-success");

  // chercher l'index dans le tableau "keepDices"
const index = keepDices.indexOf(diceUnclicked);
console.log(`La valeur du dé débloqué est ${diceUnclicked}, son index dans keepDices est ${index}`);

  // si l'index existe,
if (index > -1) {
    // supprimer la donnée du tableau
    keepDices.splice(index, 1);
    // compter le nombre des dès débloqués
    countUnBlockedDices++;
}

  // chercher l'index dans le tableau "keepDicesPositions"
const indexPosition = keepDicesPositions.indexOf(diceUnclickedPosition);

  // si l'index existe,
if(indexPosition > -1) {
    // supprimer la donnée du tableau
    keepDicesPositions.splice(indexPosition, 1);
}

console.log(`Dans le tableau "keepDicesPositions": ${keepDicesPositions}`);
console.log(`Dans le tableau "keepDices: ${keepDices}`);
}

// Event Listener
dices.forEach((dice) => {
dice.addEventListener("click", receiveDiceClick);
});

// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fin Fonction Bloquer les dés// // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // 3.Fonctions pour chaque combinaison possible // //
// // // // // // // // // // // // // // // // // // // //

// total1
// total2
// total3
// total4
// total5
// total6
// bonus
// brelan
// carré
// full

// let dicesValues = [2 ,2 ,2 ,3 ,3]
// // déterminer le nombres d'occurence d'une valeur

// const nbrOfoccurrences = (value) => {
//     let nbr = 0
//     dicesValues.forEach((dicesValue, i) => {
//         if (value == dicesValue){
//             nbr++
//         }

//     })
//     return nbr
// };


let dicesValues = [5,5,5,2,2]

// déterminer la présence d'un brelan et calculer les points correspondants

const calcBrelan = (value) => {
    let nbr = 0;
    let brelan;
    dicesValues.forEach((dicesValue ) => {
        if (value == dicesValue){
            nbr++;
        }
    }) 

    if(nbr==3){
        brelan = value*nbr; 
    }
    return brelan;
};

console.log(calcBrelan(5));


// console.log(nbrOfoccurrences(1));
// console.log(nbrOfoccurrences(2));
// console.log(nbrOfoccurrences(3));
// console.log(nbrOfoccurrences(4));
// console.log(nbrOfoccurrences(5));
// console.log(nbrOfoccurrences(6));

// petiteSuite
// grandeSuite
// yams
// chance

// // // // // // // // // // // // // // // // // // // //
// // // 3.Fin Fonctions pour chaque combinaison possible //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //
