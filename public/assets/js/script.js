
// // // // // // Tableau Partie 2 // // // // // // //

// // full 

// Remplacer "array" et "value" par keepDices et keepDice
// Exemple de tableau 
const array = [3, 3, 3, 5, 5];

const calcFull = (array) => {
    let counts = {}; // Objet pour compter combien de fois chaque valeur apparaît

    // Vérifier combien de fois chaque valeur apparaît
    array.forEach((value) => {
        // Vérifier si la valeur existe déjà comme une clé dans l'objet
        if (counts[value]) {
            // Si la valeur existe déjà, augmenter son compteur de 1
            counts[value]++;
        } else {
            // Si la valeur n'existe pas encore, initialiser son compteur à 1
            counts[value] = 1;
        }
    });

    let hasTriple = false;
    let hasDouble = false;

    for (const value in counts) {
        if (counts[value] === 3) {
            hasTriple = true;
        } else if (counts[value] === 2) {
            hasDouble = true;
        }
    }

    if (hasTriple && hasDouble) {
        return 25;
    } else {
        return 0;
    } 
};

const result = calcFull(array);
console.log("Full:", result);
