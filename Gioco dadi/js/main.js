// fisso le mie variabili globali
const bottoneGioca = document.getElementById("gioca");
let numeroCasoPC, numeroCasoUtente;

// Collego evento a bottone GIOCA
bottoneGioca.addEventListener("click", miaFunzione);

// Evento collegato al click del bottone CONTROLLA
function miaFunzione() {

    // Genero numero a caso per utente
    numeroCasoUtente = Math.floor(Math.random() * 6) + 1;

    // Genero numero a caso per PC
    numeroCasoPC = Math.floor(Math.random() * 6) + 1;

    // Riporto risultati in console..
    console.log("Il numero a caso dell'utente è: " + numeroCasoUtente);
    console.log("Il numero a caso del PC è: " + numeroCasoPC);

    // ..e su schermo
    document.getElementById("mostroRisultatoUtente").innerHTML = `${numeroCasoUtente}`;
    document.getElementById("mostroRisultatoPC").innerHTML = `${numeroCasoPC}`;

    // Creo messaggio con risultato finale della partita
    if (numeroCasoUtente > numeroCasoPC) {           // SE numero più alto è dell'utente
        console.log("Ha vinto l'utente");
        risultato = "Ha vinto l'utente";
    } else if (numeroCasoUtente === numeroCasoPC) {  // SE c'è un pareggio
        console.log("Pareggio!");
        risultato = "Pareggio!";
    } else {                                         // ALTRIMENTI (numero più alto è del PC)
        console.log("Ha vinto il PC");
        risultato = "Ha vinto il PC";
    }

    // Mostro risultato finale della partita su schermo
    document.getElementById("mostroRisultatoFinale").innerHTML = `${risultato}`;

}    
