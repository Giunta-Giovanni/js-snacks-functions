/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
// creo una funzione firstletter
function firstletter (listanomi) {
    // mi salvo una variabile flag chiamata capoletteralista inizialmente vuota
    let capoletteralista = '';
    // creo un ciclo di lettura della lista di nomi
    for (let i = 0; i < listanomi.length; i++){
        // mi salvo in una variabile i singoli elementi della lista
        let nomiesimo = listanomi[i];
        // e mi prendo la prima lettera di ogni elemento
        let capolettera = nomiesimo.charAt(0);
        // salvo tutto dentro la variabile capoletteralista
        capoletteralista = `${capoletteralista} "${capolettera}",`;
    }

    // riturn capolettera
    return capoletteralista
}

// funzione firstletter utilizzando array function e .map
const firstletter2 = listanomi => listanomi.map(nome => `"${nome.charAt(0)}"`).join(', ');   

// spiegazione
// listanomi.map --> serve per creare un nuovo array applicando una funzione a ogni elemento di un array originale, la funzione che gli passiamo viene applicata su ogni elemento dell'array
// nome --> in questo caso usiamo nome come elemento a cui effettuare la data azione
// `"${nome.charAt(0)}"`) --> azione effettuata
// .join(', '); --> facciamo diventare l'array una stringa


// Invoca la funzione qui e stampa il risultato in console

console.log(firstletter2(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

