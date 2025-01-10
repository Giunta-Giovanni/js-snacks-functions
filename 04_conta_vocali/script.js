/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
// creo una funzione vowelscount che conta le vocali
function vowelscount (parola){
    // inizializzo un array con le vocali
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    // creo le variabili flag
    let conteggio = 0;      // conteggio vocali

    // creo ciclo per avere tutti gli elementi della parola
    for (let i = 0; i < parola.length; i++){
        // mi salvo tutte le lettere della parola in minuscolo
        let lettera = parola[i].toLowerCase();

        // se la lettera è inclusa nell'array vocali
        if(vocali.includes(lettera)){
            // aumento il conteggio di 1
            conteggio++;
        }
    }

    //  ritorno conteggio aggiornato
    return conteggio;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelscount(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)