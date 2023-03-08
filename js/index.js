/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. :grande_sorriso:
*/



// kilometri da percorrere
let km = parseInt (prompt ('chilometri da percorrere'));

// età del passeggero
let age = parseInt (prompt ('età del passegero'));

// prezzo per chilometro
 let priceForKm = (0.21);

 // prezzo del biglietto
 let ticketPrice = (km * priceForKm).toFixed(2);

 // sconto minorenni
 const discountForMinors = (0.20);

 // sconto over 65 anni
 const discountOver65 = (0.40);
    

 // messaggio base
let messaggio = 'Prezzo del biglietto: ';

// Condizione generale
if(!isNaN(km) && !isNaN(age)) {
    // Condizione sconto sotto i 18 anni
    if (age < 18 ){
          messaggio += (ticketPrice * discountForMinors).toFixed(2);

         document.getElementById('testo').innerHTML = 
         `
        <h1> ${messaggio} euro </h1> 
         `;
     // Condizione sconto superiore ai 65 anni
    } else if (age > 65 ) {
        messaggio += (ticketPrice * discountOver65).toFixed(2);
        document.getElementById('testo').innerHTML = 
        `
        <h1> ${messaggio} </h1>
         `;
    // Condizione prezzo normale senza sconto
    } else {
        document.getElementById('testo').innerHTML = 
        `
        <h1> ${messaggio} ${ticketPrice} euro </h1>
        `;
    }

 // Condizione error in caso di mancanza di valori numerici
} else {
    document.getElementById('testo').innerHTML = 
    `
    <h1>Ricarica la pagina e inserisci i valori numerici </h1>
    `;
}


