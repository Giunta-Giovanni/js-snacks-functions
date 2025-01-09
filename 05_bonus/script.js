/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

// funzione saluto con argomento 'nome'
function saluto (nome){   
    let ora = new Date().getHours();
    let saluto = ''
    // salvo una variabile saluto che se richiamata la funzione mi scriva ciao + il nome
    if (ora >= 4 && ora <= 13){
        saluto = `Buongiorno ${nome}`;
    }else if (ora >= 13 && ora <= 17) {
        saluto = `Buon pomeriggio ${nome}`;
    }else if (ora >= 17 && ora <= 21){
        saluto = `Buonasera ${nome}`;
    }else{
        saluto = `Buonanotte ${nome}`;
    }

    // ritornami la variabile saluto
    return saluto
}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


