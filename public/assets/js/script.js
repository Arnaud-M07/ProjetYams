// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fonction Lancer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //


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

// Exemple de tableau 
const array = [1, 2, 5, 3, 1, 6, 6, 4, 3, 1, 3, 4, 5, 6, 6, 5, 6, 5, 5, 5, 6];

// Création d'une fonction somme des différents dès pour remplir le tableau des scores avec un switch
sumOfElements = (array, valueToSum) => {
    let i = 0;
    switch (array[i]) {
        case 1:
            let total1 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
                    total1 += valueToSum;
                }
            }
            return total1;

        case 2:
            let total2 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
                    total2 += valueToSum;
                }
            }
        return total2;

        case 3:
            let total3 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
                    total3 += valueToSum;
                }
            }
        return total3;
    
        case 4:
            let total4 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
                    total4 += valueToSum;
                }
            }
        return total4;
    
        case 5:
            let total5 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
                    total5 += valueToSum;
                }
            }
        return total5;
    
        case 6:
            let total6 = 0;
            i = 0;
            for (i; i < array.length; i++) {
                if (array[i] === valueToSum) {
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
const sumOfOne = sumOfElements(array, 1);
console.log("La somme des 1 dans le tableau est : " + sumOfOne);

const sumOfTwo = sumOfElements(array, 2);
console.log("La somme des 2 dans le tableau est : " + sumOfTwo);

const sumOfThree = sumOfElements(array, 3);
console.log("La somme des 3 dans le tableau est : " + sumOfThree);

const sumOfFor = sumOfElements(array, 4);
console.log("La somme des 4 dans le tableau est : " + sumOfFor);

const sumOfFive = sumOfElements(array, 5);
console.log("La somme des 5 dans le tableau est : " + sumOfFive);

const sumOfSix = sumOfElements(array, 6);
console.log("La somme des 6 dans le tableau est : " + sumOfSix);

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


// // // // // // // // // // // // // // // // // // // //
// // // 3.Fin Fonctions pour chaque combinaison possible //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //


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
