/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// creiamo una funzione filtro con argomenti (lista, lettera)
function filter (lista,lettera){

    // creiamo una array vutox di nome filteredlist inizialmente vuota
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
    // se l'elemento inizia per l'argomento lettera salviamo l'elemento nella variabile
    // altrimenti eliminiamola


// Invoca la funzione qui e stampa il risultato in console

console.log(filter(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]