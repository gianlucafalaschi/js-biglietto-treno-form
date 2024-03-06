/* Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, vi allego un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Come detto questa mattina nella creazione del form non utilizzate il tag <form> e per il tasto utilizzate il tag button. */

//RACCOLTA DATI
//Chiedo all'utente  i km percorsi
//Chiedo all'utente l'eta'

//QUANDO L'UTENTE CLICCA SUL BOTTONE LEGGO I VALORI DELLE INPUT
const generateButton = document.querySelector('#generate-button');
console.log(generateButton);
generateButton.addEventListener('click', function() {
    const userKm = parseInt(document.querySelector('#user-km').value);
    console.log('km', userKm);

    const userAge = parseInt(document.querySelector('#user-age').value);
    console.log('age', userAge);

    // CALCOLARE PREZZO IN BASE AI KM
    //costante prezzo al km
    const priceKm = 0.21;
    const priceTicket = parseInt(`${userKm * priceKm}`);
    console.log('ticketprice', priceTicket);
    // sconto con conditional: 
    let discount; 
    //calcolare 20% sconto se < 18
    if (userAge < 18) {
        discount = priceTicket * 20 / 100;
        console.log('discount20%' , discount);

    } 
    //calcolare 40% sconto se > 65
    else if (userAge > 65) {
        discount = priceTicket * 40 / 100;
        console.log('discount40%', discount);
    }
    //calcolare 0 sconto in tutti gli altri casi
    else {
        discount = 0;
        console.log('nodiscount', discount);
    }

    //CALCOLARE PREZZO FINALE (prezzo biglietto - sconto)
    let finalPrice = `${(priceTicket - discount).toFixed(2)} ${'€'}`;
    console.log('final price', finalPrice);
    // STAMPARE PREZZO FINALE

});









/* 
// RACCOLTA DATI NECESSARI
//creare costante prezzo al km
const priceKm = 0.21
 
//chiedere chilometri
const userKm = parseInt (prompt("Dimmi i chilometri"));
 console.log('km', userKm);
// chiedere eta'
const userAge = parseInt (prompt("Dimmi la tua eta'"));
 console.log('eta', userAge);
//CALCOLARE
//calcolare prezzo biglietto in base ai km
const priceTicket = parseFloat(`${userKm * priceKm}`);
console.log('prezzo biglietto', priceTicket);

//SCONTO
//conditional:
//calcolare sconto 20% se minorenni oppure
//calcolare sconto 40% se over65
let discount;

if (userAge < 18) {
    discount = priceTicket * 20 / 100;
}else if (userAge > 65) {
    discount = priceTicket * 40 / 100;
}else {
    discount = 0;
}
console.log('sconto', discount);

//CALCOLARE PREZZO FINALE (PREZZO BIGLIETTO - SCONTO)
let finalPrice = `Il costo del tuo biglietto e' di: ${(priceTicket - discount).toFixed(2)} €`;
console.log('prezzo finale', finalPrice);
//STAMPARE
//stampare la cifra scontata (prezzo biglietto - sconto)
document.getElementById("message").innerHTML = finalPrice; */