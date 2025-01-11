/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function paroleX(stringhe, lettera) {
    //creo il nuovo array 
    let nuovoArray = [];

    //ciclo sull'array di nomi
    for (let i = 0; i < stringhe.length; i++){

        // verifico se le iniziali sono uguali alla lettera proposta, forzandola a lettera maiuscola
        if (stringhe[i][0] === lettera.toUpperCase()) {
            //copio quindi nel nuovo array le parole con quell'iniziale
            nuovoArray.push(stringhe[i]);
        }
    }
    return (nuovoArray);
}

//usando il metodo filter():
 
/* function paroleX(stringhe, lettera) {
    return stringhe.filter(parola => parola[0]===lettera.toUpperCase());
} */


// Invoca la funzione qui e stampa il risultato in console
console.log(paroleX(names, "l")); //lettera di prova


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//versione arrow function:
/*const paroleX = (stringhe, lettera) => {
    let nuovoArray = [];
    for (let i = 0; i < stringhe.length; i++){
        if (stringhe[i][0] === lettera.toUpperCase()) {
            nuovoArray.push(stringhe[i]);
        }
    }
    return (nuovoArray);
}

console.log(paroleX(names, "l"));*/
