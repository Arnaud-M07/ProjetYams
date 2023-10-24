// // // // // // // // // // // // // // // // // // // //
// // // // // // SELECTORS // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // //
// Récuperation des Elements
let total1html = document.getElementById("total1");
let total2html = document.getElementById("total2");
let total3html = document.getElementById("total3");
let total4html = document.getElementById("total4");
let total5html = document.getElementById("total5");
let total6html = document.getElementById("total6");

let brelanhtml = document.getElementById("brelan");
let carrehtml = document.getElementById("carre");
let fullhtml = document.getElementById("full");
let petiteSuitehtml = document.getElementById("petiteSuite");
let grandeSuitehtml = document.getElementById("grandeSuite");
let yamshtml = document.getElementById("yams");
let chancehtml = document.getElementById("chance");


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
sumOfNumbers();
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


console.log(keepDices)
// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fin Fonction Bloquer les dés// // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // 3.Fonctions pour chaque combinaison possible // //
// // // // // // // // // // // // // // // // // // // //

// Création de l'Objet
let tableauScore = {
    "total1": false,
    "total2": false,
    "total3": false,
    "total4": false,
    "total5": false,
    "total6": false,
    "bonus": false,
    "brelan": false,
    "carre": false,
    "full": false,
    "petite_suite": false,
    "grande_suite": false,
    "yams": false,
    "chance": false,
}
// console.log(tableauScore);
    if (tableauScore.includes("false")) {
    
    } else {
        message.innerHTML =`<div id="inner-message">
                                        <h2 class="titleModal">La partie est terminée</h2>
                                        <p class="textModal">Revenez si vous l'osez !<br>                                       
                                        <a href="index.html"><button type="button" class="btn btn-dark btn-end" id="btnReplay">Rejouer</button></a>
                            </div>`        
    }

// Exemple de tableau 
// const array = keepDices;

// Création d'une fonction somme des différents dès pour remplir le tableau des scores avec un switch
sumOfElements = (keepDices, valueToSum) => {
    let i = 0;
    switch (keepDices[i]) {
        case 1:
            let total1 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total1 += valueToSum;
                }
            }
            return total1;

        case 2:
            let total2 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total2 += valueToSum;
                }
            }
        return total2;

        case 3:
            let total3 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total3 += valueToSum;
                }
            }
        return total3;
    
        case 4:
            let total4 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total4 += valueToSum;
                }
            }
        return total4;
    
        case 5:
            let total5 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total5 += valueToSum;
                }
            }
        return total5;
    
        case 6:
            let total6 = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === valueToSum) {
                    total6 += valueToSum;
                }
            }
        return total6;

    //     case
    //         let nbr = 0
    //         array.forEach((arrayValue, i) => {
    //             if (value == arrayValue){
    //                     nbr++
    //                 }
    //     return nbr
    //     });
    // }
    }
}

// Appel de la fonction pour avoir les totaux
let sumOfNumbers = () => {
    const sumOfOne = sumOfElements(keepDices, 1);
    console.log("La somme des 1 dans le tableau est : " + sumOfOne);

    const sumOfTwo = sumOfElements(keepDices, 2);
    console.log("La somme des 2 dans le tableau est : " + sumOfTwo);

    const sumOfThree = sumOfElements(keepDices, 3);
    console.log("La somme des 3 dans le tableau est : " + sumOfThree);

    const sumOfFor = sumOfElements(keepDices, 4);
    console.log("La somme des 4 dans le tableau est : " + sumOfFor);

    const sumOfFive = sumOfElements(keepDices, 5);
    console.log("La somme des 5 dans le tableau est : " + sumOfFive);

    const sumOfSix = sumOfElements(keepDices, 6);
    console.log("La somme des 6 dans le tableau est : " + sumOfSix);


    // Ajouter visuellement les scores au tableau
    total1html.addEventListener("click", function(){
        total1html.innerHTML = sumOfOne;
    })
    total2html.addEventListener("click", function(){
        total2html.innerHTML = sumOfTwo;
    })
    total3html.addEventListener("click", function(){
        total3html.innerHTML = sumOfThree;
    })
    total4html.addEventListener("click", function(){
        total4html.innerHTML = sumOfFor;
    })
    total5html.addEventListener("click", function(){
        total5html.innerHTML = sumOfFive;
    })
    total6html.addEventListener("click", function(){
        total6html.innerHTML = sumOfSix;
    })
}

// condition (si la somme est différent de 0) pour modifier les valeurs des paramètres de l'objet
if (sumOfOne != 0) {
    Object.defineProperty(tableauScore, "total1", {
        value: sumOfOne,
        writable: false
    });
    console.log(tableauScore.total1);
}

if (sumOfTwo != 0) {
    Object.defineProperty(tableauScore, "total2", {
        value: sumOfTwo,
        writable: false
    });
    console.log(tableauScore.total2);
}

if (sumOfThree != 0) {
    Object.defineProperty(tableauScore, "total3", {
        value: sumOfThree,
        writable: false
    });
    console.log(tableauScore.total3);
}

if (sumOfFor != 0) {
    Object.defineProperty(tableauScore, "total4", {
        value: sumOfFor,
        writable: false
    });
    console.log(tableauScore.total4);
}

if (sumOfFive != 0) {
    Object.defineProperty(tableauScore, "total5", {
        value: sumOfFive,
        writable: false
    });
    console.log(tableauScore.total5);
}

if (sumOfSix != 0) {
    Object.defineProperty(tableauScore, "total6", {
        value: sumOfSix,
        writable: false
    });
    console.log(tableauScore.total6);
}

console.log(tableauScore);

// Condition pour le bonus (si total1 + total2 + total3 + total4 + total5 + total6 >= 63) alors ajout de 35 pts bonus dans le tableau de csore
if (tableauScore.total1 + tableauScore.total2 + tableauScore.total3 + tableauScore.total4 + tableauScore.total5 + tableauScore.total6 >= 63) { 
    Object.defineProperty(tableauScore, "bonus", {
        value: 35,
        writable: false
    })
    console.log(tableauScore);
}

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

function calcPoints(){
    // Tableau récupérant la valeur de chaque opération
    const tableauScore = [total1, total2, total3, total4, total5, total6, bonus, brelan, carre, full, petiteSuite, grandeSuite, yams, chance];
    let sumPoints = 0;
    // Additionner les élements tu tableau de score
    for (let point = 0; point<tableauScore.length; point++){
        sumPoints += tableauScore[point];
    }
    console.log(sumPoints)
}
// Appel de la fonction
calcPoints();

// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //



// // Supposons que result_blockdice soit un tableau de valeurs de dés
// let result_blockdice = [/* insérez vos valeurs de dés ici */];

// let arrayScore = {
//     "total1": false,
//     "total2": false,
//     "total3": false,
//     "total4": false,
//     "total5": false,
//     "total6": false,
//     "bonus": false,
//     // ... (ajoutez d'autres catégories ici)
// };

// // Calculez les valeurs pour chaque catégorie en fonction des dés
// for (let i = 1; i <= 6; i++) {
//     let categoryKey = `total${i}`;
//     arrayScore[categoryKey] = result_blockdice.filter(dice => dice === i).length * i;
// }

// // Calculez le bonus
// let totalSum = Object.values(arrayScore).filter(value => typeof value === 'number').reduce((acc, value) => acc + value, 0);
// if (totalSum >= 63) {
//     arrayScore["bonus"] = 35;
// }

// // Vous pouvez ajouter d'autres catégories de la même manière.

// console.log(arrayScore);