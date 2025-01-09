/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// funzione saluto con argomento 'nome'
function saluto (nome){   

    // salvo una variabile saluto che se richiamata la funzione mi scriva ciao + il nome
    let hello = `ciao ${nome}`; 
    // ritornami la variabile saluto
    return hello
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(userName)); 


//Risultato atteso se si passa 'Mario': // ciao Mario
