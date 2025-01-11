/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.


function saluto(nome) {

    //creo la variabile con la data col metodo new Date()
    const data = new Date();
    //stampo solo l'orario con ora e minuti
    console.log(data.getHours(), data.getMinutes());

    //condizionale per verificare l'orario
    if (data.getHours() < 13) {
        return("buongiorno " + nome)    
    } 
    if (data.getHours() < 17) {
        return("buon pomeriggio " + nome)    
    }
    else {
        return("buonasera " + nome)    
    }
} 

//versione arrow function
/*const saluto = (nome) => {

    const data = new Date();
    console.log(data.getHours(), data.getMinutes());

    if (data.getHours() < 13) {
        return("buongiorno " + nome)    
    } 
    if (data.getHours() < 17) {
        return("buon pomeriggio " + nome)    
    }
    else {
        return("buonasera " + nome)    
    }
}*/



// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.



