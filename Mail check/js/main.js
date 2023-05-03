// Setto le mie variabili globali
const mailRegistrate = ["mario0@gmail.com", "fabio1@gmail.com", "luca2@gmail.com", "pietro3@gmail.com"];
let esito = "negativo"; // esito base = mail non presente
const bottoneControlla = document.getElementById("controlla");
let messaggioOutput;

// Collego evento a bottone CONTROLLA
bottoneControlla.addEventListener("click", miaFunzione);

// Evento collegato al click del bottone CONTROLLA
function miaFunzione() {

    // Prendo valore che utente ha scritto nell'input per l'email
    miaMail = document.getElementById("campoMail").value;

    // Riporto in console email inserita dall'utente
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

    // Creo messaggio output di accesso/rifiuto
    if (esito === "negativo") { // SE esito rimane NEGATIVO (mail utente NON presente in lista)
        messaggioOutput = "Mi dispiace, ma non sei sulla lista D:";
    } else if (esito === "positivo") { // SE esito è POSITIVO (mail utente presente in lista)
        messaggioOutput = "Puoi entrare :D";
        esito = "negativo";  // per resettare esito dopo output
    }

    // Stampo messaggio output di accesso/rifiuto
    console.log(messaggioOutput); // in console

    document.getElementById("mostroEsito").innerHTML = messaggioOutput; // su pagina

}