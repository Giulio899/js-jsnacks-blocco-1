// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var listaNomi = ["Rossi", "Bianchi", "Verdi", "Gialli"];
var nomeUtente = prompt('Indica il tuo nome');

// versione 1
// var message = "Non puoi partecipare!";
//
// for (var i = 0; i < listaNomi.length; i++) {
//   if (nomeUtente == listaNomi[i]) {
//     message = "Puoi partecipare";
//   }
// }
// document.getElementById("risposta").innerHTML = message;

// versione alternativa
var message = false;

for (var i = 0; i < listaNomi.length; i++) {
  if (nomeUtente == listaNomi[i]) {
    message = true;
  }
}

if (message) {
  document.getElementById("risposta").innerHTML = "Puoi partecipare";
} else {
  document.getElementById("risposta").innerHTML = "Non puoi partecipare";
}
