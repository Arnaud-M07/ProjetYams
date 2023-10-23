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




// déterminer la présence d'un brelan et calculer les points correspondants



// déterminer la présence d'un brelan et calculer les points correspondants

    const calcBrelan = (value) => {
    let nbr = 0;
    let brelan;
    keepDices.forEach((keepDice) => {
        if (value == keepDice){
            nbr++;
        }
    }) 

    if(nbr==3){
        brelan = value*nbr; 
    }
    return brelan;

};


// vérifier si l'occurrence est égale à trois ou plus pour savoir si il y a un brelan


// carré

const calcCarre = (value) => {
    let nbr = 0;
    let carre;
    keepDices.forEach((keepDice ) => {
        if (value == keepDice){
            nbr++;
        }
    }) 

    if(nbr==4){
        brelan = value*nbr; 
    }
    return carre;

};



// full 

const calcFull = (value) => {
    let nbr = 0;
    let full;
    keepDices.forEach((keepDice ) => {
        if (value == keepDice){
            nbr++;
        }
    }) 

    if((nbr==3) && (nbr == 2)){

    return full = 25;

    };
}


// petiteSuite




// grandeSuite


// yams

const calcYams = (value) => {
    let nbr = 0;
    let yams;
    dicesValues.forEach((keepDice) => {
        if (value == keepDice){
            nbr++;
        }
    }) 

    if(nbr==5){
        yams = 50; 
    }
}    
    return yams;

// chance

const calcChance = (value) => {
    let chance
for (let i = 0; i < dicesValues.length; i++) {

    chance += dicesValues[i];
    return chance
}
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