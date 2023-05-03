// Setto le mie variabili globali
const mailRegistrate = ["mario0@gmail.com", "fabio1@gmail.com", "luca2@gmail.com", "pietro3@gmail.com"];
let esito = "negativo"; // esito base = mail non presente

// Chiedo a utente propria email
let miaMail = prompt("Inserisci la tua email");

// Riporto in console email inserita dall'untente
console.log("La tua mail inserita è: " + miaMail);

// creo loop
for (let i = 0; i < mailRegistrate.length; i++) {

    // Riporto in console elenco mail registrate
    console.log(mailRegistrate[i]);

    // SE mail inserita da utente è in elenco mail registrate
    if (miaMail === mailRegistrate[i]) {
        esito = "positivo"; // esito diventa POSITIVO
    }
}

// Stampo in console messaggio accesso/rifiuto
if (esito === "negativo") { // SE esito rimane NEGATIVO (mail utente NON presente in lista)
    console.log("Mi dispiace, ma non sei sulla lista D:");
} else if (esito === "positivo") { // SE esito è POSITIVO (mail utente presente in lista)
    console.log("Puoi entrare :D");
}