/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const prova = 'supercalifragilistichespiralidoso'


// Dichiara la funzione qui.
// creo una funzione vowelscount
function vowelscount (parola){
    // inizializzo un array con le vocali
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    // creo le variabili flag
    let conteggio = 0;      // conteggio vocali
    let vocaliTrovate = [];  // vocali trovate

    // creo ciclo per avere tutti gli elementi della parola
    for (let i = 0; i < parola.length; i++){
        // mi salvo tutte le lettere della parola in minuscolo
        let lettera = parola[i].toLowerCase();

        // se la lettera è inclusa nell'array vocali
        if(vocali.includes(lettera)){
            // aumento il conteggio di 1
            conteggio++;
            // mi salvo le vocali all'interno dell'array vocali trovate
            vocaliTrovate.push(lettera);
        }
    }

    // mi unisco tutti gli elemnti dell'array tramite.join 
    vocaliTrovate = vocaliTrovate.join(', '); // separati con virgola e spazio

    // mi salvo in variabile il risultato di uscita che ragruppa il valore della variabile conteggio e vocali trovate aggiornato
    let risultato = `${conteggio} (${vocaliTrovate})`;

    // ritorno in uscita la variabile risultato
    return risultato

}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelscount(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)