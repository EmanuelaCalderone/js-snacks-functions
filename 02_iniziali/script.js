/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function prendiIniziali(parole) {
    //creo nuovo array con le iniziali delle parole
    let nuovoArray = []

    //ciclo sull'array delle parole
    for (let i = 0; i < parole.length; i++){
        //sposto le iniziali nel nuovo array
        nuovoArray.push(parole[i][0]);
    }
    
    return nuovoArray;    
} 

//usando il metodo map():

/*function prendiIniziali(parole){
    return parole.map(parola => parola[0]);
}*/


// Invoca la funzione qui e stampa il risultato in console

console.log(prendiIniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
/* 


/*versione arrow function: 

const prendiIniziali = (parole) => {
    let nuovoArray = []
    for (let i = 0; i < parole.length; i++){
        nuovoArray.push(parole[i][0]);
    }
    return nuovoArray;    
}

console.log(prendiIniziali(names));
 */