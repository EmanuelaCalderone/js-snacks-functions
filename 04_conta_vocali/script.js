/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function numeroVocali(stringa) {
    //creo array con le vocali minusole e maiuscole
    const vocali = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    //creo la variabile col numero delle vocali e la inizializzo a 0 perché conterrà un numero
    let numeroVocali = 0;

    //ciclo sulla stringa
    for (let i = 0; i < stringa.length; i++) {

        //verifico se la stringa contiene una vocale
        if (vocali.includes(stringa[i])) {

            //incremento il numero di vocali nella variabile
            numeroVocali++;
        }
    } return numeroVocali;
} 

//versione arrow function: 
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