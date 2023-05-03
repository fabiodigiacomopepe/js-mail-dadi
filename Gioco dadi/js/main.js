// Genero numero a caso per utente
numeroCasoUtente = Math.floor(Math.random() * 6) + 1;

// Genero numero a caso per PC
numeroCasoPC = Math.floor(Math.random() * 6) + 1;

// Riporto risultati in console
console.log("Il numero a caso dell'utente è: " + numeroCasoUtente);
console.log("Il numero a caso del PC è: " + numeroCasoPC);

if (numeroCasoUtente > numeroCasoPC) {           // SE numero più alto è dell'utente
    console.log("Ha vinto l'utente");
} else if (numeroCasoUtente === numeroCasoPC) {  // SE c'è un pareggio
    console.log("Pareggio!");
} else {                                         // ALTRIMENTI (numero più alto è del PC)
    console.log("Ha vinto il PC");
}