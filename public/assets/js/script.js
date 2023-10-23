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

// total1
// total2
// total3
// total4
// total5
// total6
// bonus







let dicesValues = [2 ,2 ,2 ,2 ,2]
// déterminer le nombres d'occurence d'une valeur

const nbrOfoccurrences = (value) => {
    let nbr = 0
    dicesValues.forEach((dicesValue, i) => {
        if (value == dicesValue){
            nbr++
        }

    })
    return nbr
};

// vérifier si l'occurrence est égale à trois ou plus pour savoir si il y a un brelan

if (nbrOfoccurrences(1) >= 3) || (nbrOfoccurrences(2) >= 3) || (nbrOfoccurrences(3) >= 3) || (nbrOfoccurrences(4) >= 3) || (nbrOfoccurrences(5) >= 3) || (nbrOfoccurrences(6) >= 3) { 
    
}
// carré

if (nbrOfoccurrences(1) >= 4) || (nbrOfoccurrences(2) >= 4) || (nbrOfoccurrences(3) >= 4) || (nbrOfoccurrences(4) >= 4) || (nbrOfoccurrences(5) >= 4) || (nbrOfoccurrences(6) >= 4) {

}


// full 

// Test si il y a une brelan ET une paire

if ((nbrOfoccurrences(1) >= 3) || (nbrOfoccurrences(2) >= 3) || (nbrOfoccurrences(3) >= 3) || (nbrOfoccurrences(4) >= 3)(nbrOfoccurrences(5) >= 3) || (nbrOfoccurrences() >= 3))) && ((nbrOfoccurrences(1) >= 2) || (nbrOfoccurrences(2) >= 2) || (nbrOfoccurrences(3) >= 2) || (nbrOfoccurrences(4) >= 2) || (nbrOfoccurrences(5) >= 2) || (nbrOfoccurrences(6) >= 2)) {

}

// petiteSuite

if (nbrOfoccurrences(1) == 1) && (nbrOfoccurrences(2) == 1) && (nbrOfoccurrences(3) == 1) && (nbrOfoccurrences(4) == 1) && (nbrOfoccurrences(5)) == 1 {

}


// grandeSuite
if (nbrOfoccurrences(2) == 1) && (nbrOfoccurrences(3) == 1) && (nbrOfoccurrences(4) == 1) && (nbrOfoccurrences(5) == 1) && if (nbrOfoccurrences(1) == 1) && (nbrOfoccurrences(2) == 1) && (nbrOfoccurrences(3) == 1) && (nbrOfoccurrences(4) == 1) && (nbrOfoccurrences(6) == 1) {

}

// yams
if (nbrOfoccurrences(1) == 5) || (nbrOfoccurrences(2) == 5) || (nbrOfoccurrences(3) == 5) || (nbrOfoccurrences(4) == 5) || (nbrOfoccurrences(5) == 5) || (nbrOfoccurrences(6) == 5) {


}

// chance


let chance = 0;

for (let i = 0; i < dicesValues.length; i++) {
    chance += dicesValues[i];
    return chance
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