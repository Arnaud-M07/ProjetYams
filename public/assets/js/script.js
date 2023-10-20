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
    for(index=0;index<dices.length;index++){
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