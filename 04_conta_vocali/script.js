/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function numeroVocali(stringa) {
    const vocali = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let numeroVocali = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i])) {
            numeroVocali++;
        }
    } return numeroVocali;
} 

//bonus arrow function: 
/* 
const numeroVocali = (stringa) => {
    const vocali = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let numeroVocali = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i])) {
            numeroVocali++;
        }
    } return numeroVocali;
} */


// Invoca la funzione qui e stampa il risultato in console

console.log(numeroVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)