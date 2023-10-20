// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fonction Lancer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //
let dices = document.querySelectorAll('.diceButton');// Récupération des élements Dés
let rollDicesButton = document.getElementById('throwDice');// Récupération du bouton "Lancer les dés"

// Fonction Lancer de dés - Jing
const numberOfTheTrials = 3;
let dicesValues = [];

function rollDices(numberOfTheTotalDices) {
    for (let i = 0; i < numberOfTheTotalDices; i++) {
        dicesValues[i] = Math.floor(Math.random() * 6 + 1);
    };
};
rollDices(5);

// Affecter visuellement aux dés les résultats du lancer 
let btnRollDices = () => {
    rollDices(5);
    for (index = 0; index < dices.length; index++) {
        dices[index].innerHTML = dicesValues[index];
    }
}

// Event Listener 
rollDicesButton.addEventListener("click", btnRollDices)

// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fin fonction Lancer les dés // // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fonction Bloquer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //

// récupération des chaque dè 
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");

function restartDices() {

    let keepDices = [];

    numberOfTheDicesKept 
    numberOfTheDices
    

    keepDices.push(4, 5);

    console.log(keepDices);

    let resultsSecondRoll = rollDices(3);
    console.log(resultsSecondRoll);

    resultsSecondRoll.forEach((dice) => {
        // choix utilisateur 
        console.log(keepDices.push(dice));
    })
    console.log(keepDices);

}

// restartDices();

// // Event Listener 
dice1.addEventListener("click", restartDices);
dice2.addEventListener("click", restartDices);
dice3.addEventListener("click", restartDices);
dice4.addEventListener("click", restartDices);
dice5.addEventListener("click", restartDices);



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