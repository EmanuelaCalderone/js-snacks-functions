/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function paroleX(stringhe, lettera) {
    let nuovoArray = [];
    for (let i = 0; i < stringhe.length; i++){
        if (stringhe[i][0] === lettera.toUpperCase()) {
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
console.log(paroleX(names, "l"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//bonus arrow function:
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
