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

let bonushtml = document.getElementById("bonus");
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


// Fonction de restart de partie
const restart = () => {
    keepDices = [];
    keepDicesPositions = [];

    let dicesValues = rollDices(5);

    for (index = 0; index < 5; index++) {
        dices[index].innerHTML = dicesValues[index];
    }

    dices.forEach((dice) => {
        dice.classList.remove("text-success");
    })


    rollDicesButton.disabled;
    rollDicesButton.classList.remove("text-success");
    rollDicesButton.classList.remove("text-danger");
    messageOf1throwLeft.classList.add("d-none");
    messageOf2throwsLeft.classList.add("d-none")
    messageOfNothrowLeft.classList.add("d-none");

    countNbOfThrow = 0;
    countBlockedDices = 0;
    countUnBlockedDices = 0;

}









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
sumOfElements();
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

console.log(tableauScore);


// calul pour brelan et carre
const calc = (value) => {
    let nbr = 0
    keepDices.forEach((keepDice) => {
        if (value == keepDice){
            nbr++
        }

    })
    return nbr
};


// Création d'une fonction somme des différents dès pour remplir le tableau des scores avec un switch
let total = 0;
let i = 0;
const sumOfElements = (keepDices, combination) => {
    switch (combination) {
        case 'total1':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 1) {
                    total += 1;
                }
            }
            tableauScore.total1 = total
        break;

        case 'total2':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 2) {
                    total += 2;
                }
            }
            tableauScore.total2 = total
        break;

        case 'total3':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 3) {
                    total += 3;
                }
            }
            tableauScore.total3 = total
        break;
    
        case 'total4':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 4) {
                    total += 4;
                }
            }
            tableauScore.total4 = total
        break;
    
        case 'total5':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 5) {
                    total += 5;
                }
            }
            tableauScore.total5 = total
        break;
    
        case 'total6':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices[i] === 6) {
                    total += 6;
                }
            }
            tableauScore.total6 = total;
        break;
        
        case "brelan":
            total = 0;
            i = 0;
            for (let i=1; i<=5; i++) {
                if (calc(i) >= 3) {
                    total = i*3
                }
            }
            tableauScore.brelan = total
        break;
        
        case "carre":
            total = 0;
            i = 0;
            for (let i=1; i<=5; i++) {
                if (calc(i) >= 4) {
                    total = i*4
                }
            }
            tableauScore.carre = total
        break
        
        case 'full':
            const calcFull = (keepDices) => {
            let counts = {}; // Objet pour compter combien de fois chaque valeur apparaît
        
            // Vérifier combien de fois chaque valeur apparaît
            keepDices.forEach((keepDice) => {
                // Vérifier si la valeur existe déjà comme une clé dans l'objet
                if (counts[keepDice]) {
                    // Si la valeur existe déjà, augmenter son compteur de 1
                    counts[keepDice]++;
                } else {
                    // Si la valeur n'existe pas encore, initialiser son compteur à 1
                    counts[keepDice] = 1;
                }
            });
        
            let hasTriple = false;
            let hasDouble = false;
        
            for (const keepDice in counts) {
                if (counts[keepDice] === 3) {
                    hasTriple = true;
                } else if (counts[keepDice] === 2) {
                    hasDouble = true;
                }
            }
        
            if (hasTriple && hasDouble) {
                return 25;
            } else {
                return 0;
            } 
        };
        
        const result = calcFull(keepDices);
        console.log("Full:", result);
        tableauScore.full = result;
        break;

        case 'petiteSuite':
            total = 0;
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices.includes(1) && keepDices.includes(2) && keepDices.includes(3) && keepDices.includes(4) && keepDices.includes(5) ) {
                    console.log(30);
                    tableauScore.petite_suite = 30;
                }else {
                    console.log(0);
                    tableauScore.petite_suite = 0;
            }
        };
        break;

        case 'grandeSuite':
            i = 0;
            for (i; i < keepDices.length; i++) {
                if (keepDices.includes(2) && keepDices.includes(3) && keepDices.includes(4) && keepDices.includes(5) && keepDices.includes(6) ) {
                    tableauScore.grande_suite = 35;
                }else {
                    tableauScore.grande_suite = 0;
                }
            }
        break;

        case 'yams':
            total = 0;
            function calcYams(keepDices) {
                const firstElement = keepDices[0];
        // vérifier si les valeurs du tableau sont identiques
                const result = keepDices.every((element) => {
        return element === firstElement;
                });
        // afficher le calcul du point
                if (result) {
                    tableauScore.yams = 50
                } else {
                    tableauScore.yams = 0
                }
            }
        calcYams(keepDices);
        break;
            
        case 'chance':
            function calcChance(keepDices) {
                keepDices.forEach((nb) => {
                    total += nb;
                });
            }
            calcChance(keepDices);
            tableauScore.chance = total
        break;
                
        default:
            console.log("operation non reconnue");
        break;
    }
        return total    
}
    console.log(total);

// Ajouter visuellement les scores au tableau
total1html.addEventListener("click", function () {
    const sumOfOne = sumOfElements(keepDices, 'total1');
    total1html.innerHTML = sumOfOne;
        restart();
        btnRollDices();
})
total2html.addEventListener("click", function () {
    const sumOfTwo = sumOfElements(keepDices, 'total2');
    total2html.innerHTML = sumOfTwo;
        restart();
        btnRollDices();
})
total3html.addEventListener("click", function () {
    const sumOfThree = sumOfElements(keepDices, 'total3');
    total3html.innerHTML = sumOfThree;
        restart();
        btnRollDices();
})
total4html.addEventListener("click", function () {
    const sumOfFor = sumOfElements(keepDices, 'total4');
    total4html.innerHTML = sumOfFor;
        restart();
        btnRollDices();
})
total5html.addEventListener("click", function () {
    const sumOfFive = sumOfElements(keepDices, 'total5');
    total5html.innerHTML = sumOfFive;
        restart();
        btnRollDices()
})
total6html.addEventListener("click", function () {
    const sumOfSix = sumOfElements(keepDices, 'total6');
    total6html.innerHTML = sumOfSix;
        restart();
        btnRollDices();
})
brelanhtml.addEventListener("click", function(){
    const sumOfbrelan = sumOfElements(keepDices, 'brelan');
    brelanhtml.innerHTML = sumOfbrelan;
        restart();
        btnRollDices();
})
carrehtml.addEventListener("click", function(){
    const sumOfcarre = sumOfElements(keepDices, 'carre');
    carrehtml.innerHTML = sumOfcarre;
        restart();
        btnRollDices();
})
fullhtml.addEventListener("click", function(){
    sumOfElements(keepDices, 'full');
    fullhtml.innerHTML = tableauScore.full;
        restart();
        btnRollDices();
})
petiteSuitehtml.addEventListener("click", function () {
    sumOfElements(keepDices, 'petiteSuite');
    petiteSuitehtml.innerHTML = tableauScore.petite_suite;
        restart();
        btnRollDices();
})
grandeSuitehtml.addEventListener("click", function () {
    sumOfElements(keepDices, 'grandeSuite');
    grandeSuitehtml.innerHTML = tableauScore.grande_suite;
        restart();
        btnRollDices();
})
yamshtml.addEventListener("click", function(){
    const sumOfyams = sumOfElements(keepDices, 'yams');
    yamshtml.innerHTML = sumOfyams;
        restart();
        btnRollDices();
})
chancehtml.addEventListener("click", function(){
    const sumOfchance = sumOfElements(keepDices, 'chance');
    chancehtml.innerHTML = sumOfchance;
        restart();
        btnRollDices();
})

// Condition pour le bonus (si total1 + total2 + total3 + total4 + total5 + total6 >= 63) alors ajout de 35 pts bonus dans le tableau de csore
if (tableauScore.total1 + tableauScore.total2 + tableauScore.total3 + tableauScore.total4 + tableauScore.total5 + tableauScore.total6 >= 63) { 
    tableauScore.bonus = 35;
    bonushtml.innerHTML = tableauScore.bonus
}
console.log(tableauScore);

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
    const tableauScore = ["total1", "total2", "total3", "total4", "total5", "total6", "bonus", "brelan", "carre", "full", "petiteSuite", "grandeSuite", "yams", "chance"];
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

// // Vous pouvez ajouter d'autres catégories de la même manière

// console.log(arrayScore);