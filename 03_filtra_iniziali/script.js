/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// creiamo una funzione filtro con argomenti (lista, lettera)
function filter (lista,lettera){

    // creiamo una array vuoto di nome filteredlist inizialmente vuota
    let filteredlist = [];

    // creiamo un ciclo di analisi della lista
    for (let i = 0; i < lista.length; i++){
        // ci salviamo gli elementi della lista
        let element = lista[i];

        // ci salviamo la prima lettera di ogni elemento
        let elementfirstletter = element.charAt(0)

        // creiamo una condizione che se la prima lettera è uguale alla lettera del filtro la inseriamo all'interno della lista filtrata
        if (elementfirstletter === lettera) {
            filteredlist.push(element)
        }  
    }

// ritorno la lista filtrata
return filteredlist;

}

// funzione filtro con argomenti (lista, lettera) sviluppata con array function
const filter2 = (lista, lettera) => lista.filter(element => element.charAt(0) === lettera);

// Spiegazione
// lista.filter --> crea un nuovo array con tutti gli elementi che soddisfano una determinata condizione
// (element => element.charAt(0) === lettera) --> è la condizione che verifica se la prima lettera corrisponde alla lettera di filtro

// Invoca la funzione qui e stampa il risultato in console

console.log(filter2(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]