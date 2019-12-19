// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// alert('funziona la pagina?')

// Quanti chilometri deve percorrere l'utente per viaggiare?


var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener ('click',
  function () {

    var nomeInput = document.getElementById('nome_utente');
    console.log(nomeInput);
    var nome = nomeInput.value;
    console.log(nome);

    var inputKm = document.getElementById('km');
    console.log(inputKm);
    var chilometriUtente = inputKm.value;
    console.log(chilometriUtente);

    var fasciaEtaSelect = document.getElementById('fascia_eta');
    console.log(fasciaEtaSelect);
    var fascia = fasciaEtaSelect.value;
    console.log(fascia);


    // // è necessario definire il costo del biglietto in base ai chilometri che l'utente percorre
    // // Se gli utenti hanno una età compresa tra i 18 anni e i 64 anni andrà applicata la tariffa normale
    var calcoloViaggio = chilometriUtente * 0.21;
    console.log(calcoloViaggio);

    // Se l'utente è minorenne andrà applicato uno sconto del 20%
    var calcoloViaggio20 = chilometriUtente * 0.21 / 100 * 20;
    // console.log(calcoloViaggio20);

    // Se l'utente è over 65 andrà applicato uno sconto del 40%
    var calcoloViaggio40 = chilometriUtente * 0.21 / 100 * 40;
    // console.log(calcoloViaggio40);

    var calcoloViaggioSconto20 = calcoloViaggio - calcoloViaggio20;
    // console.log(calcoloViaggioSconto20);

    var calcoloViaggioSconto40 = calcoloViaggio - calcoloViaggio40;
    // console.log(calcoloViaggioSconto40);

    var offerta = 'Tariffa Standard';


    if (fascia == 'Minorenne') {

      calcoloViaggio = calcoloViaggio - calcoloViaggio20;
      console.log(calcoloViaggioSconto20);
      offerta = 'Sconto Minorenne';
    }
    else if (fascia == 'Over65') {

      calcoloViaggio = calcoloViaggio - calcoloViaggio40;
      console.log(calcoloViaggioSconto40);
      offerta = 'Sconto Silver';
    }
    else {

      calcoloViaggio
      console.log(calcoloViaggio)
    }

    var carrozza = Math.floor(Math.random() * 9) + 1;
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
    document.getElementById('nome_passeggero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo').innerHTML = calcoloViaggio.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;
  }
);

var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener('click',
  function()  {
    document.getElementById('nome_passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';

    document.getElementById('nome_passeggero').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia_eta').value = '';
  }



)
