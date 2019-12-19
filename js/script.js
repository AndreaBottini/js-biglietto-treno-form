// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// alert('funziona la pagina?')

// Quanti chilometri deve percorrere l'utente per viaggiare?
var chilometriUtente = parseInt(prompt('Benvenuto nel servizio di erogazione ticket. Dove vorresti andare? Avremmo bisogno di sapere il numero di chilometri che vuoi percorrere'));
console.log(chilometriUtente);

// Quanti anni ha l'utente?
var etaUtente = parseInt(prompt('Ora avremmo bisogno di conoscere la tua età'));
console.log(etaUtente);

// è necessario definire il costo del biglietto in base ai chilometri che l'utente percorre
// Se gli utenti hanno una età compresa tra i 18 anni e i 64 anni andrà applicata la tariffa normale
var calcoloViaggio = chilometriUtente * 0.21;
// console.log(calcoloViaggio);

// Se l'utente è minorenne andrà applicato uno sconto del 20%
var calcoloViaggio20 = (Math.round (chilometriUtente * 0.21) / 100) * 20;
// console.log(calcoloViaggio20);

// Se l'utente è over 65 andrà applicato uno sconto del 40%
var calcoloViaggio40 = (Math.round (chilometriUtente * 0.21) / 100) * 40;
// console.log(calcoloViaggio40);

var calcoloViaggioSconto20 = Math.round (calcoloViaggio - calcoloViaggio20);
// console.log(calcoloViaggioSconto20);

var calcoloViaggioSconto40 = Math.round (calcoloViaggio - calcoloViaggio40);
// console.log(calcoloViaggioSconto40);

if (etaUtente < 18) {

  calcoloViaggioSconto20 = calcoloViaggio - calcoloViaggio20;
  console.log(calcoloViaggioSconto20);
}
else if (etaUtente >= 65) {

  calcoloViaggioSconto40 = calcoloViaggio - calcoloViaggio40;
  console.log(calcoloViaggioSconto40);
}
else {

  calcoloViaggio
  console.log(calcoloViaggio)
}
