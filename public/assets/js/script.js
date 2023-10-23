//// // // // // // // // // // // // // // // // // // //
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




// déterminer la présence d'un brelan et calculer les points correspondants


let keepDices = [2,2,2,3,6];

// déterminer le nombres d'occurence d'une valeur

const calc = (value) => {
    let nbr = 0
    keepDices.forEach((keepDice) => {
        if (value == keepDice){
            nbr++
        }

    })
    return nbr
};

// // déterminer la présence d'un brelan et calculer les points correspondants

case "brelan"

for ( let i=1; i<=5; i++ ) {
    if (calc(i) >= 3) {
        total = i*3

        }
    }

}

break

// // déterminer présence d'un carré

case "carre"
for ( let i=1; i<=5; i++ ) {
    if (calc(i) >= 4) {
        total = i*4

        }
    }

}

break


// // full 




// // petiteSuite



// // grandeSuite


// // yams





// // chance

// const calcChance = (value) => {
//     let chance
// for (let i = 0; i < keepDices.length; i++) {

//     chance += keepDices[i];
//     return chance
// }
// }


// // // // // // // // // // // // // // // // // // // //
// // // 3.Fin Fonctions pour chaque combinaison possible //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //